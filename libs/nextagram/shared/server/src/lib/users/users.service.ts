import {
	deleteFile,
	uploadFile,
	uploadFileFromUrl,
} from '../shared/storage/file-storage';
import { createThumbnailURL } from '../shared/utils/create-thumbnail-url';
import { DEFAULT_PROFILE_PICTURE_URL } from './users.constants';
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

interface UpdateProfilePictureParams {
	user: User;
	file: File | null;
}

export const updateProfilePicture = async ({
	user,
	file,
}: UpdateProfilePictureParams): Promise<User | null> => {
	const profilePictureVersion = Number(user.image?.split('_').at(-1) ?? 0);

	if (profilePictureVersion > 0) {
		await deleteFile({
			name: getUserProfilePictureName(user, profilePictureVersion),
		});
	}

	const profilePictureName = getUserProfilePictureName(
		user,
		profilePictureVersion + 1,
	);
	const image = createThumbnailURL(profilePictureName);

	const updatedUser = await updateById(user.id, {
		image,
	});
	await (file
		? uploadFile({
				body: file,
				name: profilePictureName,
			})
		: uploadFileFromUrl({
				url: DEFAULT_PROFILE_PICTURE_URL,
				name: profilePictureName,
			}));

	return updatedUser;
};
