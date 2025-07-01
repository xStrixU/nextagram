import { useAction } from '@nextagram/nextagram-shared-actions/hooks';

import { commentPost as commentPostFn } from '../server/comment-post';

import type { InferHookCallbacks } from '@nextagram/nextagram-shared-actions/hooks';

type UseCommentPostParams = InferHookCallbacks<typeof commentPostFn>;

export const useCommentPost = (params?: UseCommentPostParams) => {
	const { execute: commentPost, ...rest } = useAction(commentPostFn, params);

	return { commentPost, ...rest };
};
