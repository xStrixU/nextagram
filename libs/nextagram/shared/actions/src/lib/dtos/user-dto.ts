import type { User } from '@nextagram/nextagram-shared-server';

export interface UserDto {
	id: string;
	name: string;
	username: string;
	image: string;
	updatedAt: Date;
}

export const mapUserToUserDto = ({
	id,
	name,
	username,
	image,
	updatedAt,
}: User): UserDto => ({
	id,
	name,
	username,
	image,
	updatedAt,
});
