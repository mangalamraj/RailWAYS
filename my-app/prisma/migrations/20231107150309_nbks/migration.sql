/*
  Warnings:

  - You are about to drop the `TrainReservation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Passenger" DROP CONSTRAINT "Passenger_trainReservationId_fkey";

-- DropTable
DROP TABLE "TrainReservation";

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "trainNo" TEXT NOT NULL,
    "passengerFare" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_trainReservationId_fkey" FOREIGN KEY ("trainReservationId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
