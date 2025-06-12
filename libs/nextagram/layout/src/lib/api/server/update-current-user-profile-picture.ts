'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import {
	UnauthenticatedError,
	actionClient,
} from '@nextagram/nextagram-shared-actions';
import { usersService } from '@nextagram/nextagram-shared-server';
import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';

const inputSchema = z.object({
	file: z
		.instanceof(File)
		.refine(file => ['image/jpeg', 'image/png'].includes(file.type), {
			message: 'Invalid file mime type',
		}),
});

export const updateCurrentUserProfilePicture = actionClient
	.inputSchema(inputSchema)
	.action(async ({ parsedInput: { file } }) => {
		const { user } = await getCurrentSession();

		if (!user) {
			throw new UnauthenticatedError();
		}

		await usersService.updateProfilePicture({ user, file });

		revalidatePath('[locale]', 'layout');
	});
