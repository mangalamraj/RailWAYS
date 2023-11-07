/*
  Warnings:

  - Added the required column `passenger_fare` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `passenger_phon` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `passenger_age` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "passenger_fare" INTEGER NOT NULL,
DROP COLUMN "passenger_phon",
ADD COLUMN     "passenger_phon" INTEGER NOT NULL,
DROP COLUMN "passenger_age",
ADD COLUMN     "passenger_age" INTEGER NOT NULL;
