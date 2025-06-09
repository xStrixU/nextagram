import type { usersTable } from '../shared/database/schema';

export type UserEntity = typeof usersTable.$inferSelect;
export type UserId = UserEntity['id'];
export type User = UserEntity;
