import { useMutation } from '@tanstack/react-query';

import { authClient } from '@nextagram/nextagram-shared-server/auth/client';

const deleteCurrentSessionFn = async () => {
	const { data, error } = await authClient.signOut();

	if (error) {
		throw error;
	}

	return data;
};

export const useDeleteCurrentSession = () => {
	const { mutateAsync: deleteCurrentSession, ...rest } = useMutation({
		mutationFn: deleteCurrentSessionFn,
	});

	return { deleteCurrentSession, ...rest };
};
