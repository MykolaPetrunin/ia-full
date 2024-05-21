import {FC, PropsWithChildren} from 'react';

export const Page: FC<PropsWithChildren> = ({children}) => {
    return <div className="p-4 max-w-screen-xl">{children}</div>
};
