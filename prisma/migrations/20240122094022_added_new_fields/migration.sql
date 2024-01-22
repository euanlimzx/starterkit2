/*
  Warnings:

  - You are about to drop the column `content` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Review` table. All the data in the column will be lost.
  - Added the required column `address` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `femalePrac` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `negSentiment` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialReview` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `negSentiment` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "femalePrac" BOOLEAN NOT NULL,
ADD COLUMN     "negSentiment" BOOLEAN NOT NULL,
ADD COLUMN     "rating" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "specialReview" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "content",
DROP COLUMN "userId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "negSentiment" BOOLEAN NOT NULL,
ADD COLUMN     "review" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];
