import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';

import { actionClient } from './action-client';
import { UnauthenticatedError } from './errors/unauthenticated-error';

export const authActionClient = actionClient.use(async ({ next }) => {
	const { user } = await getCurrentSession();

	if (!user) {
		throw new UnauthenticatedError();
	}

	return next({ ctx: { user } });
});
