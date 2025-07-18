import { cuid2 } from 'drizzle-cuid2/postgres';
import { relations } from 'drizzle-orm';
import {
	integer,
	pgTable,
	primaryKey,
	text,
	timestamp,
} from 'drizzle-orm/pg-core';

import { usersTable } from './auth';

export const postsTable = pgTable('posts', {
	id: cuid2('id').defaultRandom().primaryKey(),
	description: text('description').notNull(),
	files: text('files').array().notNull(),
	authorId: text('author_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	createdAt: timestamp('created_at')
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
	updatedAt: timestamp('updated_at')
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
});

export const postsTableRelations = relations(postsTable, ({ one, many }) => ({
	author: one(usersTable, {
		fields: [postsTable.authorId],
		references: [usersTable.id],
	}),
	likes: many(postLikesTable),
	comments: many(postCommentsTable),
}));

export const postLikesTable = pgTable(
	'post_likes',
	{
		userId: text('user_id')
			.notNull()
			.references(() => usersTable.id),
		postId: cuid2('post_id')
			.notNull()
			.references(() => postsTable.id),
		createdAt: timestamp('created_at')
			.$defaultFn(() => /* @__PURE__ */ new Date())
			.notNull(),
	},
	t => [primaryKey({ columns: [t.userId, t.postId] })],
);

export const postLikesTableRelations = relations(postLikesTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [postLikesTable.userId],
		references: [usersTable.id],
	}),
	post: one(postsTable, {
		fields: [postLikesTable.postId],
		references: [postsTable.id],
	}),
}));

export const postCommentsTable = pgTable('post_comments', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	postId: cuid2('post_id')
		.notNull()
		.references(() => postsTable.id),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id),
	content: text('content').notNull(),
	createdAt: timestamp('created_at')
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
});

export const postCommentsTableRelations = relations(
	postCommentsTable,
	({ one }) => ({
		post: one(postsTable, {
			fields: [postCommentsTable.postId],
			references: [postsTable.id],
		}),
		user: one(usersTable, {
			fields: [postCommentsTable.userId],
			references: [usersTable.id],
		}),
	}),
);
