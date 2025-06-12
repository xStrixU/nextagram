import { useAction } from '@nextagram/nextagram-shared-actions/hooks';

import { deleteCurrentUserProfilePicture as deleteCurrentUserProfilePictureFn } from '../server/delete-current-user-profile-picture';

import type { InferHookCallbacks } from '@nextagram/nextagram-shared-actions/hooks';

type UseDeleteCurrentUserProfilePictureParams = InferHookCallbacks<
	typeof deleteCurrentUserProfilePictureFn
>;

export const useDeleteCurrentUserProfilePicture = (
	params?: UseDeleteCurrentUserProfilePictureParams,
) => {
	const { execute: deleteCurrentUserProfilePicture, ...rest } = useAction(
		deleteCurrentUserProfilePictureFn,
		params,
	);

	return { deleteCurrentUserProfilePicture, ...rest };
};
