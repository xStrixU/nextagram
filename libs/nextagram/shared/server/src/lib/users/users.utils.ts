import { PROFILE_PICTURES_S3_PREFIX } from './users.constants';

import type { User } from './users.types';

export const getUserProfilePictureName = (user: User, version: number) =>
	`${PROFILE_PICTURES_S3_PREFIX}${user.id}_${version}`;
