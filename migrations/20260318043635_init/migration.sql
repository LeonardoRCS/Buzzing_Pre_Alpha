-- CreateTable
CREATE TABLE "BusTrip" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lineName" TEXT NOT NULL,
    "scheduledTime" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);
