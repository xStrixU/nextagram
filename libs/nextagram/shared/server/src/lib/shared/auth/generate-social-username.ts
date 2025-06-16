import { usersService } from '../../users';

export const generateSocialUsername = (name: string) => {
	const baseUsername = name.replaceAll(/\s+/g, '').toLowerCase();

	return usersService.generateUniqueUsername(baseUsername);
};
