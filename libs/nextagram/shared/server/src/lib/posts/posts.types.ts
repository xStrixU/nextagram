import type { postCommentsTable, postsTable } from '../shared/database/schema';
import type { postLikesTable } from '../shared/database/schema';
import type { User } from '../users';
import type { UserEntity } from '../users/users.types';

type PostLikeEntity = typeof postLikesTable.$inferSelect;
type PostCommentEntity = typeof postCommentsTable.$inferInsert;

export type PostEntity = typeof postsTable.$inferSelect & {
	author: UserEntity;
	likes: PostLikeEntity[];
	comments: PostCommentEntity[];
};
export type Post = PostEntity & { author: User; isLiked?: boolean };

export type PostId = PostEntity['id'];
