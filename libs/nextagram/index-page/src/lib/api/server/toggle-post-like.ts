'use server';

import { zfd } from 'zod-form-data';

import { authActionClient } from '@nextagram/nextagram-shared-actions';
import { postsService } from '@nextagram/nextagram-shared-server';

const inputSchema = zfd.formData({
	postId: zfd.text(),
});

export const togglePostLike = authActionClient
	.inputSchema(inputSchema)
	.action(async ({ ctx: { user }, parsedInput: { postId } }) => {
		const post = await postsService.toggleLikeById({ id: postId, user });

		return post;
	});
