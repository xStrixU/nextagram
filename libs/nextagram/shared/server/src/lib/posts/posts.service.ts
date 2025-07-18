import { uploadFile } from '../shared/storage/file-storage';
import { createThumbnailURL } from '../shared/utils/create-thumbnail-url';
import * as postsRepository from './posts.repository';

import type { User } from '../users/users.types';
import type { Post, PostId } from './posts.types';

interface GetAllParams {
	cursor?: string;
	limit?: number;
}

export const getAll = async ({ cursor, limit }: GetAllParams = {}): Promise<
	Post[]
> => {
	const posts = await postsRepository.getAll({ cursor, limit });

	return posts;
};

export const getById = async (id: PostId): Promise<Post | null> => {
	const post = await postsRepository.getById(id);

	return post;
};

interface CreateParams {
	description: string;
	files: File[];
	author: User;
}

export const create = async ({
	description,
	files,
	author,
}: CreateParams): Promise<Post> => {
	const post = await postsRepository.create({
		description,
		files: [],
		authorId: author.id,
	});
	const uploadedFiles: string[] = [];

	for await (const [i, file] of files.entries()) {
		const fileName = `posts/${post.id}/${i + 1}`;

		await uploadFile({
			name: fileName,
			body: file,
		});

		uploadedFiles.push(createThumbnailURL(fileName));
	}

	const updatedPost = await updateById(post.id, { files: uploadedFiles });

	return updatedPost ?? post;
};

export const updateById = async (
	id: PostId,
	post: Partial<Post>,
): Promise<Post | null> => {
	const updatedPost = await postsRepository.updateById(id, post);

	return updatedPost;
};

interface ToggleLikeByIdParams {
	id: PostId;
	user: User;
}

export const toggleLikeById = async ({
	id,
	user,
}: ToggleLikeByIdParams): Promise<Post | null> => {
	const post = await getById(id);

	if (!post) {
		return null;
	}

	const isLiked = post.likes.some(({ userId }) => userId === user.id);
	const action = isLiked
		? postsRepository.unlikeById
		: postsRepository.likeById;

	return action({ id, userId: user.id });
};

interface CommentByIdParams {
	id: PostId;
	user: User;
	content: string;
}

export const commentById = async ({
	user,
	...params
}: CommentByIdParams): Promise<Post | null> => {
	const post = await postsRepository.commentById({
		userId: user.id,
		...params,
	});

	return post;
};
