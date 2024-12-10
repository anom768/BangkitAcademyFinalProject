/*
  Warnings:

  - Added the required column `a` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `b` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `c` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `d` to the `quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quiz` ADD COLUMN `a` VARCHAR(100) NOT NULL,
    ADD COLUMN `b` VARCHAR(100) NOT NULL,
    ADD COLUMN `c` VARCHAR(100) NOT NULL,
    ADD COLUMN `d` VARCHAR(100) NOT NULL;
