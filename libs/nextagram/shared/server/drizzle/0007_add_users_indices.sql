CREATE INDEX "created_at_index" ON "users" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "created_at_and_id_index" ON "users" USING btree ("created_at","id");