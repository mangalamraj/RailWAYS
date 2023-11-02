/*
  Warnings:

  - A unique constraint covering the columns `[mobile]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "mobile" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Users_mobile_key" ON "Users"("mobile");
