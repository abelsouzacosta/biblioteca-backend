/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Author";

-- CreateTable
CREATE TABLE "Authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date_birth" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
