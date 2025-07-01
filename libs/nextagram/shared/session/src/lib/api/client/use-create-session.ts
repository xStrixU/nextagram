import { useMutation } from '@tanstack/react-query';

import { authClient } from '@nextagram/nextagram-shared-server/auth/client';
import { EMAIL_REGEX } from '@nextagram/nextagram-shared-server/constants';

interface CreateSessionFnParams {
	login: string;
	password: string;
	rememberMe?: boolean;
}

const createSessionFn = async ({ login, ...params }: CreateSessionFnParams) => {
	const { data, error } = await (EMAIL_REGEX.test(login)
		? authClient.signIn.email({
				email: login,
				...params,
			})
		: authClient.signIn.username({
				username: login,
				...params,
			}));

	if (error) {
		throw error;
	}

	return data;
};

export const useCreateSession = () => {
	const { mutateAsync: createSession, ...rest } = useMutation({
		mutationFn: createSessionFn,
	});

	return { createSession, ...rest };
};
