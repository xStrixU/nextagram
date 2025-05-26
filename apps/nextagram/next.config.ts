import { composePlugins, withNx } from '@nx/next';

import withI18n from '@nextagram/nextagram-shared-i18n/plugin';

import type { WithNxOptions } from '@nx/next/plugins/with-nx';

const nextConfig: WithNxOptions = {
	nx: {
		svgr: false,
	},
	experimental: {
		ppr: true,
		dynamicIO: true,
		typedRoutes: true,
	},
	turbopack: {
		rules: {
			'*.svg': {
				as: '*.js',
				loaders: ['@svgr/webpack'],
			},
		},
	},
};

const plugins = [withNx, withI18n];

export default composePlugins(...plugins)(nextConfig);
