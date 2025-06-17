import { composePlugins, withNx } from '@nx/next';

import { env } from '@nextagram/nextagram-shared-env';
import withI18n from '@nextagram/nextagram-shared-i18n/plugin';

import type { WithNxOptions } from '@nx/next/plugins/with-nx';

const thumbnailURL = new URL(env.THUMBNAIL_API_ENDPOINT);

const nextConfig: WithNxOptions = {
	nx: {
		svgr: false,
	},
	experimental: {
		ppr: true,
		dynamicIO: true,
		serverActions: {
			bodySizeLimit: '3mb',
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: thumbnailURL.protocol.slice(0, -1) as 'http' | 'https',
				hostname: thumbnailURL.hostname,
			},
		],
	},
};

const plugins = [withNx, withI18n];

export default composePlugins(...plugins)(nextConfig);
