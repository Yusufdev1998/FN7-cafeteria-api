/*
  Warnings:

  - The primary key for the `CashTransactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CashTransactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CashTransactions" DROP CONSTRAINT "CashTransactions_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "CashTransactions_pkey" PRIMARY KEY ("source_id", "source_name");
