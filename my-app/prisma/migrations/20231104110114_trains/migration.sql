-- CreateTable
CREATE TABLE "Train" (
    "id" SERIAL NOT NULL,
    "train_no" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_destination" TEXT NOT NULL,
    "end_destination" TEXT NOT NULL,
    "departure_date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "quota" TEXT NOT NULL,
    "seat_1a" INTEGER NOT NULL,
    "seat_2a" INTEGER NOT NULL,
    "seat_3a" INTEGER NOT NULL,
    "seat_sl" INTEGER NOT NULL,
    "seat_tatkal_1a" INTEGER NOT NULL,
    "seat_tatkal_2a" INTEGER NOT NULL,
    "seat_tatkal_3a" INTEGER NOT NULL,
    "seat_tatkal_sl" INTEGER NOT NULL,

    CONSTRAINT "Train_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Train_train_no_key" ON "Train"("train_no");
