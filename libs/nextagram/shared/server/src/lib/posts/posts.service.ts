import { uploadFile } from '../shared/storage/file-storage';
import { createThumbnailURL } from '../shared/utils/create-thumbnail-url';
import * as postsRepository from './posts.repository';

import type { User } from '../users/users.types';
import type { Post, PostId } from './posts.types';

export const updateById = async (
	id: PostId,
	post: Partial<Post>,
): Promise<Post | null> => {
	const updatedPost = await postsRepository.updateById(id, post);

	return updatedPost;
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
