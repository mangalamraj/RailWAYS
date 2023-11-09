/*
  Warnings:

  - Added the required column `passengerClass` to the `Passenger` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Passenger" ADD COLUMN     "passengerClass" TEXT NOT NULL;
