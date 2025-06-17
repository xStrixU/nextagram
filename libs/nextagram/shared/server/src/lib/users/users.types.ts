import type { auth } from '../shared/auth/auth';
import type { usersTable } from '../shared/database/schema';

export type UserEntity = typeof usersTable.$inferSelect;
export type User = (typeof auth.$Infer.Session)['user'];
export type UserDto = Pick<
	User,
	'id' | 'username' | 'name' | 'image' | 'updatedAt'
>;

export type UserId = UserEntity['id'];
