import { useAction } from '@nextagram/nextagram-shared-actions/hooks';

import { updateCurrentUserPublicInformation as updateCurrentUserPublicInformationFn } from '../server/update-current-user-public-information';

export const useUpdateCurrentUserPublicInformation = () => {
	const { executeAsync: updateCurrentUserPublicInformation, ...rest } =
		useAction(updateCurrentUserPublicInformationFn);

	return { updateCurrentUserPublicInformation, ...rest };
};
