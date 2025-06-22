import { eq } from 'drizzle-orm';

import { db } from '../shared/database/db';
import { postsTable } from '../shared/database/schema';

import type { PostEntity, PostId } from './posts.types';

interface GetAllParams {
	cursor?: string;
	limit?: number;
}

export const getAll = async ({
	cursor,
	limit = 5,
}: GetAllParams): Promise<PostEntity[]> => {
	const cursorPost = cursor ? await getById(cursor) : null;
	const posts = await db.query.postsTable.findMany({
		limit,
		with: {
			author: true,
		},
		where: (postsTable, { and, gt, or }) =>
			cursorPost
				? or(
						gt(postsTable.createdAt, cursorPost.createdAt),
						and(
							eq(postsTable.createdAt, cursorPost.createdAt),
							gt(postsTable.id, cursorPost.id),
						),
					)
				: undefined,
	});

	return posts;
};

export const getById = async (id: PostId): Promise<PostEntity | null> => {
	const post = await db.query.postsTable.findFirst({
		where: eq(postsTable.id, id),
		with: {
			author: true,
		},
	});

	return post ?? null;
};

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

	return getById(post.id) as Promise<PostEntity>;
};

export const updateById = async (
	id: PostId,
	post: Partial<PostEntity>,
): Promise<PostEntity | null> => {
	await db
		.update(postsTable)
		.set(post)
		.where(eq(postsTable.id, id))
		.returning();

	return getById(id);
};
