/*
  Warnings:

  - You are about to drop the column `departure_date` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `passenger_email` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `passenger_seat` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `train_name` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `passenger_age` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passenger_gender` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "departure_date",
DROP COLUMN "passenger_email",
DROP COLUMN "passenger_seat",
DROP COLUMN "train_name",
ADD COLUMN     "passenger_age" TEXT NOT NULL,
ADD COLUMN     "passenger_gender" TEXT NOT NULL;
