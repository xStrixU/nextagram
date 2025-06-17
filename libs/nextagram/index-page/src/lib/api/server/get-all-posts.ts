import { postsService } from '@nextagram/nextagram-shared-server';

import 'server-only';

export const getAllPosts = async () => {
	const posts = await postsService.getAll();

	return posts;
};
