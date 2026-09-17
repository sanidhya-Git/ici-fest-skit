-- AlterTable
ALTER TABLE "Event" ADD COLUMN IF NOT EXISTS "sequence" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Event_category_sequence_createdAt_idx" ON "Event"("category", "sequence", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Event_sequence_idx" ON "Event"("sequence");
