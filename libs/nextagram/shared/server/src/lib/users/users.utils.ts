import { PROFILE_PICTURES_S3_PREFIX } from './users.constants';

import type { User } from './users.types';

export const getUserProfilePictureName = (user: User) =>
	PROFILE_PICTURES_S3_PREFIX + user.id;
