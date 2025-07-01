import { useMutation } from '@tanstack/react-query';

import { authClient } from '@nextagram/nextagram-shared-server/auth/client';

interface CreateUserFnParams {
	name: string;
	email: string;
	password: string;
	username?: string | null;
	displayUsername?: string | null;
	image?: string;
}

const createUserFn = async (params: CreateUserFnParams) => {
	const { data, error } = await authClient.signUp.email(params);

	if (error) {
		throw error;
	}

	return data;
};

export const useCreateUser = () => {
	const { mutateAsync: createUser, ...rest } = useMutation({
		mutationFn: createUserFn,
	});

	return { createUser, ...rest };
};
