'use server';

import { revalidatePath } from 'next/cache';
import { zfd } from 'zod-form-data';

import {
	UnauthenticatedError,
	actionClient,
} from '@nextagram/nextagram-shared-actions';
import { usersService } from '@nextagram/nextagram-shared-server';
import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';

export const deleteCurrentUserProfilePicture = actionClient
	.inputSchema(zfd.formData({}))
	.action(async () => {
		const { user } = await getCurrentSession();

		if (!user) {
			throw new UnauthenticatedError();
		}

		await usersService.updateProfilePicture({ user, file: null });

		revalidatePath('[locale]', 'layout');
	});
