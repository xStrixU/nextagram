import { useAction } from '@nextagram/nextagram-shared-actions/hooks';

import { createPost as createPostFn } from '../server/create-post';

export const useCreatePost = () => {
	const { executeAsync: createPost, ...rest } = useAction(createPostFn);

	return { createPost, ...rest };
};
