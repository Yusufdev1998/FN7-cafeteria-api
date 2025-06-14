-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('OPENED', 'CLOSED', 'CANCELED');

-- CreateEnum
CREATE TYPE "CashStatus" AS ENUM ('INCOME', 'OUTCOME');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'OPENED',
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderMeals" (
    "meal_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderMeals_pkey" PRIMARY KEY ("meal_id","order_id")
);

-- CreateTable
CREATE TABLE "Expenditures" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "comment" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Expenditures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashTransactions" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "CashStatus" NOT NULL,
    "source_id" INTEGER NOT NULL,
    "source_name" TEXT NOT NULL,

    CONSTRAINT "CashTransactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMeals" ADD CONSTRAINT "OrderMeals_meal_id_fkey" FOREIGN KEY ("meal_id") REFERENCES "Meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMeals" ADD CONSTRAINT "OrderMeals_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenditures" ADD CONSTRAINT "Expenditures_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
