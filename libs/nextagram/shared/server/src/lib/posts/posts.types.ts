import type { postsTable } from '../shared/database/schema';
import type { postLikesTable } from '../shared/database/schema';
import type { User, UserDto } from '../users';
import type { UserEntity } from '../users/users.types';

type PostLikeEntity = typeof postLikesTable.$inferSelect;

export type PostEntity = typeof postsTable.$inferSelect & {
	author: UserEntity;
	likes: PostLikeEntity[];
};
export type Post = PostEntity & { author: User; isLiked?: boolean };
export type PostDto = Omit<
	Post,
	'author' | 'authorId' | 'likes' | 'updatedAt'
> & {
	author: UserDto;
	likes: number;
};

export type PostId = PostEntity['id'];
