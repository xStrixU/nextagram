import type { postsTable } from '../shared/database/schema';
import type { postLikesTable } from '../shared/database/schema';
import type { User } from '../users';
import type { UserEntity } from '../users/users.types';

type PostLikeEntity = typeof postLikesTable.$inferSelect;

export type PostEntity = typeof postsTable.$inferSelect & {
	author: UserEntity;
	likes: PostLikeEntity[];
};
export type Post = PostEntity & { author: User; isLiked?: boolean };

export type PostId = PostEntity['id'];
