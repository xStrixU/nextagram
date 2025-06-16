import { eq } from 'drizzle-orm';

import { db } from '../shared/database/db';
import { postsTable } from '../shared/database/schema';

import type { PostEntity, PostId } from './posts.types';

interface CreateParams {
	description: string;
	files: string[];
	authorId: string;
}

export const create = async ({
	description,
	files,
	authorId,
}: CreateParams): Promise<PostEntity> => {
	const [post] = await db
		.insert(postsTable)
		.values({
			description,
			files,
			authorId,
		})
		.returning();

	return post;
};

export const updateById = async (
	id: PostId,
	post: Partial<PostEntity>,
): Promise<PostEntity | null> => {
	const [updatedPost] = await db
		.update(postsTable)
		.set(post)
		.where(eq(postsTable.id, id))
		.returning();

	return updatedPost ?? null;
};
