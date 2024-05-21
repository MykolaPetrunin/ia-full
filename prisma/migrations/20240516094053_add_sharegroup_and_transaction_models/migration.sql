-- CreateTable
CREATE TABLE "ShareGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ShareGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "ticket" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "shareGroupId" TEXT,
    "commission" DOUBLE PRECISION,
    "price" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_shareGroupId_fkey" FOREIGN KEY ("shareGroupId") REFERENCES "ShareGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
