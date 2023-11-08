/*
  Warnings:

  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Booking";

-- CreateTable
CREATE TABLE "TrainReservation" (
    "id" SERIAL NOT NULL,
    "trainNo" TEXT NOT NULL,
    "passengerFare" INTEGER NOT NULL,

    CONSTRAINT "TrainReservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passenger" (
    "id" SERIAL NOT NULL,
    "passengerName" TEXT NOT NULL,
    "passengerPhone" INTEGER NOT NULL,
    "passengerAge" INTEGER NOT NULL,
    "passengerGender" TEXT NOT NULL,
    "passengerBerth" TEXT NOT NULL,
    "passengerStatus" TEXT NOT NULL,
    "trainReservationId" INTEGER NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_trainReservationId_fkey" FOREIGN KEY ("trainReservationId") REFERENCES "TrainReservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
