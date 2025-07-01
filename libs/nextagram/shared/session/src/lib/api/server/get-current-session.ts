import { headers } from 'next/headers';

import { auth } from '@nextagram/nextagram-shared-server/auth';

export const getCurrentSession = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return { session: null, user: null };
	}

	return session;
};
