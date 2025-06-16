import { cuid2 } from 'drizzle-cuid2/postgres';
import { relations } from 'drizzle-orm';
import { pgTable, text } from 'drizzle-orm/pg-core';

import { usersTable } from './auth';

export const postsTable = pgTable('posts', {
	id: cuid2('id').defaultRandom().primaryKey(),
	description: text('description').notNull(),
	files: text('files').array().notNull(),
	authorId: text('author_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
});

export const postsTableRelations = relations(postsTable, ({ one }) => ({
	author: one(usersTable, {
		fields: [postsTable.authorId],
		references: [usersTable.id],
	}),
}));
