CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"name" text,
	"email" text,
	"role" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
