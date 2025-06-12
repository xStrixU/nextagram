import { useAction } from '@nextagram/nextagram-shared-actions/hooks';

import { updateCurrentUserProfilePicture as updateCurrentUserProfilePictureFn } from '../server/update-current-user-profile-picture';

export const useUpdateCurrentUserProfilePicture = () => {
	const { executeAsync: updateCurrentUserProfilePicture, ...rest } = useAction(
		updateCurrentUserProfilePictureFn,
	);

	return { updateCurrentUserProfilePicture, ...rest };
};
