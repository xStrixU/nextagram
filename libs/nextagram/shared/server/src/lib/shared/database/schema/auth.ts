import { relations } from 'drizzle-orm';
import { boolean, index, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { postsTable } from './posts';

export const usersTable = pgTable(
	'users',
	{
		id: text('id').primaryKey(),
		name: text('name').notNull(),
		username: text('username').notNull().unique(),
		displayUsername: text('display_username'),
		email: text('email').notNull().unique(),
		emailVerified: boolean('email_verified')
			.$defaultFn(() => false)
			.notNull(),
		image: text('image').notNull().default(''),
		biography: text('biography').notNull().default(''),
		createdAt: timestamp('created_at')
			.$defaultFn(() => /* @__PURE__ */ new Date())
			.notNull(),
		updatedAt: timestamp('updated_at')
			.$defaultFn(() => /* @__PURE__ */ new Date())
			.notNull(),
	},
	t => [
		index('created_at_index').on(t.createdAt),
		index('created_at_and_id_index').on(t.createdAt, t.id),
	],
);

export const usersTableRelations = relations(usersTable, ({ many }) => ({
	posts: many(postsTable),
}));

export const sessionsTable = pgTable('sessions', {
	id: text('id').primaryKey(),
	expiresAt: timestamp('expires_at').notNull(),
	token: text('token').notNull().unique(),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull(),
	ipAddress: text('ip_address'),
	userAgent: text('user_agent'),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
});

export const accountsTable = pgTable('accounts', {
	id: text('id').primaryKey(),
	accountId: text('account_id').notNull(),
	providerId: text('provider_id').notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	accessToken: text('access_token'),
	refreshToken: text('refresh_token'),
	idToken: text('id_token'),
	accessTokenExpiresAt: timestamp('access_token_expires_at'),
	refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
	scope: text('scope'),
	password: text('password'),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull(),
});

export const verificationsTable = pgTable('verifications', {
	id: text('id').primaryKey(),
	identifier: text('identifier').notNull(),
	value: text('value').notNull(),
	expiresAt: timestamp('expires_at').notNull(),
	createdAt: timestamp('created_at').$defaultFn(
		() => /* @__PURE__ */ new Date(),
	),
	updatedAt: timestamp('updated_at').$defaultFn(
		() => /* @__PURE__ */ new Date(),
	),
});
