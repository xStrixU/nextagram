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
	fullName: z.string().min(1),
	biography: z.string(),
});

export const updateCurrentUserPublicInformation = actionClient
	.inputSchema(inputSchema)
	.action(async ({ parsedInput: { fullName, biography } }) => {
		const { user } = await getCurrentSession();

		if (!user) {
			throw new UnauthenticatedError();
		}

		await usersService.updateById(user.id, {
			biography,
			name: fullName,
		});

		revalidatePath('[locale]', 'layout');
	});
