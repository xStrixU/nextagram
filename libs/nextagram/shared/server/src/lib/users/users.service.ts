import * as usersRepository from './users.repository';

export const generateUniqueUsername = async (base: string) => {
	let username = base;
	let counter = 1;

	while (await usersRepository.findByUsername(username)) {
		username = `${base}${counter}`;
		counter++;
	}

	return username;
};
