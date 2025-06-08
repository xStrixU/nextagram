import { env } from '@nextagram/nextagram-shared-env';

export const createThumbnailURL = (name: string) =>
	`${env.THUMBNAIL_API_ENDPOINT}/${name}`;
