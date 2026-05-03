/*
  Warnings:

  - You are about to drop the column `data` on the `List` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Task` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `List` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_listId_fkey";

-- AlterTable
ALTER TABLE "List" DROP COLUMN "data",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "authorId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finishedAt" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
