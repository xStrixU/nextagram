import { defineConfig } from 'drizzle-kit';

import { env } from '@nextagram/nextagram-shared-env';

export default defineConfig({
	schema: './src/lib/shared/database/schema',
	dialect: 'postgresql',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
