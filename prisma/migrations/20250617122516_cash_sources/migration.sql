/*
  Warnings:

  - Changed the type of `source_name` on the `CashTransactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CashSources" AS ENUM ('ORDERS', 'EXPENDITURES');

-- AlterTable
ALTER TABLE "CashTransactions" DROP COLUMN "source_name",
ADD COLUMN     "source_name" "CashSources" NOT NULL;
