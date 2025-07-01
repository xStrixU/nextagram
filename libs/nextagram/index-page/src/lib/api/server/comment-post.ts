'use server';

import { zfd } from 'zod-form-data';
import { z } from 'zod/v4';

import {
	authActionClient,
	mapPostToPostDto,
} from '@nextagram/nextagram-shared-actions';
import { postsService } from '@nextagram/nextagram-shared-server';

const inputSchema = zfd.formData({
	postId: zfd.text(),
	content: zfd.text(z.string().min(1)),
});

export const commentPost = authActionClient
	.inputSchema(inputSchema)
	.action(async ({ ctx: { user }, parsedInput: { postId, content } }) => {
		const post = await postsService.commentById({
			id: postId,
			user,
			content,
		});

		return post && mapPostToPostDto(post);
	});
