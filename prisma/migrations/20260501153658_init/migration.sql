-- CreateTable
CREATE TABLE "List" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "listId" INTEGER NOT NULL,
    CONSTRAINT "Task_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
