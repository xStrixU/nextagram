CREATE TABLE "posts" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"files" text[] NOT NULL,
	"author_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;