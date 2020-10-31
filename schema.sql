CREATE TABLE "public"."Collection" (
  "id" VARCHAR(25) PRIMARY KEY NOT NULL,
  "title" VARCHAR(255) UNIQUE NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL
);
CREATE TABLE "public"."Item" (
  "id" VARCHAR(25) PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "imageUrl" VARCHAR(255) NOT NULL,
  "price" NUMERIC(5,2) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL,
  "collectionId" VARCHAR(25),
  CONSTRAINT FK_Item_Collection FOREIGN KEY ("collectionId") REFERENCES "public"."Collection"(id) ON DELETE CASCADE,
  UNIQUE ("name", "collectionId")
);