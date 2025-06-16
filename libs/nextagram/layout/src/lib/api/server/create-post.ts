'use server';

import { z } from 'zod';

import { authActionClient } from '@nextagram/nextagram-shared-actions';
import { postsService } from '@nextagram/nextagram-shared-server';

const inputSchema = z.object({
	description: z.string().min(1),
	files: z.array(
		z
			.instanceof(File)
			.refine(
				file =>
					[
						'image/jpeg',
						'image/png',
						'image/heic',
						'image/heif',
						'video/mp4',
						'video/quicktime',
					].includes(file.type),
				{
					message: 'Invalid file mime type',
				},
			),
	),
});

export const createPost = authActionClient
	.inputSchema(inputSchema)
	.action(async ({ ctx: { user }, parsedInput: { description, files } }) => {
		await postsService.create({ description, files, author: user });
	});
