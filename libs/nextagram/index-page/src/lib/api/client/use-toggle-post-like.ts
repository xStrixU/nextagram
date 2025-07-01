import { useAction } from '@nextagram/nextagram-shared-actions/hooks';

import { togglePostLike as togglePostLikeFn } from '../server/toggle-post-like';

import type { InferHookCallbacks } from '@nextagram/nextagram-shared-actions/hooks';

type UseTogglePostLikeParams = InferHookCallbacks<typeof togglePostLikeFn>;

export const useTogglePostLike = (params?: UseTogglePostLikeParams) => {
	const { execute: togglePostLike, ...rest } = useAction(
		togglePostLikeFn,
		params,
	);

	return { togglePostLike, ...rest };
};
