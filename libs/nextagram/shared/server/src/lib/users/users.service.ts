import { uploadFile, uploadLocalFile } from '../shared/storage/file-storage';
import { DEFAULT_PROFILE_PICTURE_PATH } from './users.constants';
import * as usersRepository from './users.repository';
import { getUserProfilePictureName } from './users.utils';

import type { User, UserId } from './users.types';

export const generateUniqueUsername = async (base: string) => {
	let username = base;
	let counter = 1;

	while (await findBy({ username })) {
		username = `${base}${counter}`;
		counter++;
	}

	return username;
};

interface FindByParams {
	id?: string;
	username?: string;
	email?: string;
}

export const findBy = async (params: FindByParams): Promise<User | null> => {
	const user = await usersRepository.findBy(params);

	return user;
};

export const updateById = async (
	id: UserId,
	user: Partial<User>,
): Promise<User | null> => {
	const updatedUser = await usersRepository.updateById(id, user);

	return updatedUser;
};

export const resetProfilePicture = async (user: User) => {
	await uploadLocalFile({
		path: DEFAULT_PROFILE_PICTURE_PATH,
		name: getUserProfilePictureName(user),
	});
	await updateById(user.id, { updatedAt: new Date() });
};

interface UpdateProfilePictureParams {
	user: User;
	file: File;
}

export const updateProfilePicture = async ({
	user,
	file,
}: UpdateProfilePictureParams) => {
	await uploadFile({
		body: Buffer.from(await file.arrayBuffer()),
		name: getUserProfilePictureName(user),
	});
	await updateById(user.id, { updatedAt: new Date() });
};
