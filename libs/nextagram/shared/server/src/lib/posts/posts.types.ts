import type { postsTable } from '../shared/database/schema';

export type PostEntity = typeof postsTable.$inferSelect;
export type Post = PostEntity;
export type PostDto = PostEntity;

export type PostId = PostEntity['id'];
