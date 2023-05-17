/*
  Warnings:

  - You are about to drop the column `name` on the `emails` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Emails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `emails` DROP COLUMN `name`,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL;
