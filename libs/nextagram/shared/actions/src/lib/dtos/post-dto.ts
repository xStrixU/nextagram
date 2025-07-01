import type { Post } from '@nextagram/nextagram-shared-server';

import type { UserDto } from './user-dto';

export interface PostDto {
	id: string;
	description: string;
	files: string[];
	createdAt: Date;
	author: UserDto;
	likes: number;
	isLiked?: boolean;
}

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
