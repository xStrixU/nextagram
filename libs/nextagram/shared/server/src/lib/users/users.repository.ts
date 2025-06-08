import { and, eq } from 'drizzle-orm';

import { db } from '../shared/database/db';
import { usersTable } from '../shared/database/schema';

import type { SQL } from 'drizzle-orm';

import type { UserEntity, UserId } from './users.types';

interface FindByParams {
	id?: string;
	username?: string;
	email?: string;
}

export const findBy = async ({
	id,
	username,
	email,
}: FindByParams): Promise<UserEntity | null> => {
	const filters: SQL[] = [];

	if (id) filters.push(eq(usersTable.id, id));
	if (username) filters.push(eq(usersTable.username, username));
	if (email) filters.push(eq(usersTable.email, email));

	const user = await db.query.usersTable.findFirst({
		where: and(...filters),
	});

	return user ?? null;
};

export const updateById = async (
	id: UserId,
	user: Partial<UserEntity>,
): Promise<UserEntity | null> => {
	const [updatedUser] = await db
		.update(usersTable)
		.set(user)
		.where(eq(usersTable.id, id))
		.returning();

	return updatedUser ?? null;
};
