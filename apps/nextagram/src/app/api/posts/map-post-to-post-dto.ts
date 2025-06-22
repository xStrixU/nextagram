import type { Post, PostDto } from '@nextagram/nextagram-shared-server';

export const mapPostToPostDto = ({
	id,
	description,
	files,
	createdAt,
	author,
}: Post): PostDto => ({
	id,
	description,
	files,
	createdAt,
	author: {
		id: author.id,
		name: author.name,
		username: author.username,
		image: author.image,
		updatedAt: author.updatedAt,
	},
});
