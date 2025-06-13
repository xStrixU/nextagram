import { createThumbnailURL } from '../shared/utils/create-thumbnail-url';

export const DEFAULT_PROFILE_PICTURE_URL = createThumbnailURL(
	'assets/default-profile-picture.jpg',
);
export const PROFILE_PICTURES_S3_PREFIX = 'profile-pictures/';
