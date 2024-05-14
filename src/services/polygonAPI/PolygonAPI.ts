import { format, sub } from 'date-fns';

export enum TaskTypes {
  History = 'History',
  DailyCandles = 'DailyCandles',
}

interface GetHistoryProps {
  ticker: string;
}

interface GetDailyProps {
  date: string;
}

interface HistoryTask {
  type: TaskTypes.History;
  props: GetHistoryProps;
}

interface DailyCandlesTask {
  type: TaskTypes.DailyCandles;
  props: GetDailyProps;
}

type Task = HistoryTask | DailyCandlesTask;

type TaskResult<T> = T extends HistoryTask
  ? string
  : T extends DailyCandlesTask
    ? number
    : any;

const MAX_REQUESTS_PER_MINUTE = 5;

export class PolygonAPI {
  private static instance: PolygonAPI;
  private baseUrl = 'https://api.polygon.io/v2';
  private lastSentRequests: number[] = [];

  private constructor() {
    // private constructor to prevent creating new instances
  }

  private async getHistory({ ticker }: GetHistoryProps): Promise<string> {
    const date = new Date();
    const from = format(sub(date, { years: 3 }), 'yyyy-MM-dd');
    const res = await fetch(
      `${this.baseUrl}/aggs/ticker/${ticker}/range/1/day/${from}/${format(date, 'yyyy-MM-dd')}?apiKey=${process.env.POLYGON_API_KEY!}`,
    );
    return res.json() as unknown as string;
  }
  private async getDailyCandles(props: GetDailyProps): Promise<number> {
    return 5;
  }

  private clearOldRequests() {
    this.lastSentRequests = this.lastSentRequests.filter((timestamp) => {
      return Date.now() - timestamp < 65000;
    });
  }

  private async checkRequestAbility(): Promise<void> {
    this.clearOldRequests();

    const timestamp = Date.now();

    if (this.lastSentRequests.length < MAX_REQUESTS_PER_MINUTE) {
      this.lastSentRequests = [...this.lastSentRequests, timestamp];
      return;
    }

    const nextRequestTime =
      this.lastSentRequests[this.lastSentRequests.length - 5] +
      65000 -
      timestamp;

    await new Promise((resolve) => setTimeout(resolve, nextRequestTime));

    this.lastSentRequests = [...this.lastSentRequests, Date.now()];
    return;
  }

  async addTask<T extends Task>(task: T): Promise<TaskResult<T>> {
    await this.checkRequestAbility();
    let res: TaskResult<T>;

    try {
      switch (task.type) {
        case TaskTypes.History:
          res = (await this.getHistory(
            task.props as GetHistoryProps,
          )) as TaskResult<T>;
          break;
        case TaskTypes.DailyCandles:
          res = (await this.getDailyCandles(
            task.props as GetDailyProps,
          )) as TaskResult<T>;
          break;
        default:
          throw new Error('Unsupported task type');
      }

      if (
        (res as { error?: string })?.error ===
        "You've exceeded the maximum requests per minute, please wait or upgrade your subscription to continue. https://polygon.io/pricing"
      ) {
        await new Promise((resolve) => setTimeout(resolve, 65000));
        return this.addTask(task);
      }

      return res;
    } catch (error) {
      throw new Error('Unsupported error');
    }
  }

  public static getInstance(): PolygonAPI {
    if (!PolygonAPI.instance) {
      PolygonAPI.instance = new PolygonAPI();
    }
    return PolygonAPI.instance;
  }
}
