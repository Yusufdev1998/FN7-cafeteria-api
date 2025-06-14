/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Meals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Meals_name_key" ON "Meals"("name");
