import { eq } from 'drizzle-orm';

import { db } from '../shared/database/db';
import { usersTable } from '../shared/database/schema';

export const findByUsername = async (username: string) => {
	const user = await db.query.usersTable.findFirst({
		where: eq(usersTable.username, username),
	});

	return user ?? null;
};
