-- CreateTable
CREATE TABLE "NextUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "NextUser_pkey" PRIMARY KEY ("id")
);
