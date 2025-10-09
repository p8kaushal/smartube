-- CreateTable
CREATE TABLE "ContentGroup" (
    "id" SERIAL NOT NULL,
    "ref" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "dateCreated" TIMESTAMP(3),
    "noOfSubs" INTEGER,
    "source" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "ContentGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "grpId" INTEGER,
    "url" TEXT NOT NULL,
    "length" INTEGER,
    "viewCount" INTEGER,
    "description" TEXT,
    "thumbnail" TEXT,
    "title" TEXT,
    "type" TEXT NOT NULL,
    "summary" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_grpId_fkey" FOREIGN KEY ("grpId") REFERENCES "ContentGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
