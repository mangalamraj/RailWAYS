/*
  Warnings:

  - Added the required column `arrival_date` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_destination` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_1a_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_2a_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_3a_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_sl_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_tatkal_1a_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_tatkal_2a_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_tatkal_3a_price` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat_tatkal_sl_price` to the `Train` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Train" ADD COLUMN     "arrival_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "main_destination" TEXT NOT NULL,
ADD COLUMN     "seat_1a_price" INTEGER NOT NULL,
ADD COLUMN     "seat_2a_price" INTEGER NOT NULL,
ADD COLUMN     "seat_3a_price" INTEGER NOT NULL,
ADD COLUMN     "seat_sl_price" INTEGER NOT NULL,
ADD COLUMN     "seat_tatkal_1a_price" INTEGER NOT NULL,
ADD COLUMN     "seat_tatkal_2a_price" INTEGER NOT NULL,
ADD COLUMN     "seat_tatkal_3a_price" INTEGER NOT NULL,
ADD COLUMN     "seat_tatkal_sl_price" INTEGER NOT NULL;
