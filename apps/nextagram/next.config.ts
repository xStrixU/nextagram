import { composePlugins, withNx } from '@nx/next';

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

const plugins = [withNx];

export default composePlugins(...plugins)(nextConfig);
