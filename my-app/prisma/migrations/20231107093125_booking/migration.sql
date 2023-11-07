-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "train_no" INTEGER NOT NULL,
    "train_name" TEXT NOT NULL,
    "departure_date" TIMESTAMP(3) NOT NULL,
    "passenger_name" TEXT NOT NULL,
    "passenger_phon" TEXT NOT NULL,
    "passenger_email" TEXT NOT NULL,
    "passenger_berth" TEXT NOT NULL,
    "passenger_seat" TEXT NOT NULL,
    "passenger_status" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_train_no_key" ON "Booking"("train_no");
