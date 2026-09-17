-- AlterEnum
ALTER TYPE "EventCategory" ADD VALUE 'HACKATHON';

-- AlterTable
ALTER TABLE "CoordinatorManagedData" ADD COLUMN     "problemStatement" TEXT;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "problemStatement" TEXT;

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE INDEX "Account_provider_providerAccountId_idx" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE INDEX "Account_provider_idx" ON "Account"("provider");

-- CreateIndex
CREATE INDEX "Account_expires_at_idx" ON "Account"("expires_at");

-- CreateIndex
CREATE INDEX "Admin_adminId_idx" ON "Admin"("adminId");

-- CreateIndex
CREATE INDEX "Admin_isActive_idx" ON "Admin"("isActive");

-- CreateIndex
CREATE INDEX "Admin_createdAt_idx" ON "Admin"("createdAt");

-- CreateIndex
CREATE INDEX "CoordinatorManagedData_eventSlug_idx" ON "CoordinatorManagedData"("eventSlug");

-- CreateIndex
CREATE INDEX "CoordinatorManagedData_createdAt_idx" ON "CoordinatorManagedData"("createdAt");

-- CreateIndex
CREATE INDEX "Event_slug_idx" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "Event_coordinatorEmail_idx" ON "Event"("coordinatorEmail");

-- CreateIndex
CREATE INDEX "Event_category_isHidden_idx" ON "Event"("category", "isHidden");

-- CreateIndex
CREATE INDEX "Event_registrationStatus_category_idx" ON "Event"("registrationStatus", "category");

-- CreateIndex
CREATE INDEX "Event_reviewRequestStatus_category_idx" ON "Event"("reviewRequestStatus", "category");

-- CreateIndex
CREATE INDEX "Event_isHidden_registrationStatus_idx" ON "Event"("isHidden", "registrationStatus");

-- CreateIndex
CREATE INDEX "Event_category_registrationStatus_isHidden_idx" ON "Event"("category", "registrationStatus", "isHidden");

-- CreateIndex
CREATE INDEX "Event_createdAt_idx" ON "Event"("createdAt");

-- CreateIndex
CREATE INDEX "Event_registrationType_category_idx" ON "Event"("registrationType", "category");

-- CreateIndex
CREATE INDEX "Event_durationInDays_idx" ON "Event"("durationInDays");

-- CreateIndex
CREATE INDEX "EventCoordinator_eventId_idx" ON "EventCoordinator"("eventId");

-- CreateIndex
CREATE INDEX "EventCoordinator_branch_year_idx" ON "EventCoordinator"("branch", "year");

-- CreateIndex
CREATE INDEX "EventCoordinator_mobile_idx" ON "EventCoordinator"("mobile");

-- CreateIndex
CREATE INDEX "EventRegistrationForm_eventId_idx" ON "EventRegistrationForm"("eventId");

-- CreateIndex
CREATE INDEX "EventRegistrationForm_isActive_eventId_idx" ON "EventRegistrationForm"("isActive", "eventId");

-- CreateIndex
CREATE INDEX "EventRegistrationForm_status_eventId_idx" ON "EventRegistrationForm"("status", "eventId");

-- CreateIndex
CREATE INDEX "EventSchedule_eventId_idx" ON "EventSchedule"("eventId");

-- CreateIndex
CREATE INDEX "EventSchedule_date_startTime_idx" ON "EventSchedule"("date", "startTime");

-- CreateIndex
CREATE INDEX "EventSchedule_venue_idx" ON "EventSchedule"("venue");

-- CreateIndex
CREATE INDEX "EventSchedule_date_eventId_idx" ON "EventSchedule"("date", "eventId");

-- CreateIndex
CREATE INDEX "Session_sessionToken_idx" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Session_expires_idx" ON "Session"("expires");

-- CreateIndex
CREATE INDEX "Session_userId_expires_idx" ON "Session"("userId", "expires");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_isActive_idx" ON "User"("role", "isActive");

-- CreateIndex
CREATE INDEX "User_isActive_idx" ON "User"("isActive");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");

-- CreateIndex
CREATE INDEX "User_emailVerified_idx" ON "User"("emailVerified");

-- CreateIndex
CREATE INDEX "VerificationToken_expires_idx" ON "VerificationToken"("expires");

-- CreateIndex
CREATE INDEX "VerificationToken_identifier_idx" ON "VerificationToken"("identifier");
