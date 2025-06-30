import type { Post, PostDto } from '@nextagram/nextagram-shared-server';

export const mapPostToPostDto = ({
	id,
	description,
	files,
	likes,
	createdAt,
	author,
}: Post): PostDto => {
	const isLiked = likes.some(like => like.userId === author.id);

	return {
		id,
		description,
		files,
		likes: likes.length,
		isLiked,
		createdAt,
		author: {
			id: author.id,
			name: author.name,
			username: author.username,
			image: author.image,
			updatedAt: author.updatedAt,
		},
	};
};
