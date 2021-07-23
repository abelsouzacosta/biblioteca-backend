/*
  Warnings:

  - You are about to drop the `Publisher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Publisher";

-- CreateTable
CREATE TABLE "Publishers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Publishers.name_unique" ON "Publishers"("name");
