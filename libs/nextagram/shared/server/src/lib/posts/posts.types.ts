import type { postsTable } from '../shared/database/schema';
import type { User, UserDto } from '../users';
import type { UserEntity } from '../users/users.types';

export type PostEntity = typeof postsTable.$inferSelect & {
	author: UserEntity;
};
export type Post = PostEntity & { author: User };
export type PostDto = Omit<PostEntity, 'author' | 'authorId' | 'updatedAt'> & {
	author: UserDto;
};

export type PostId = PostEntity['id'];
