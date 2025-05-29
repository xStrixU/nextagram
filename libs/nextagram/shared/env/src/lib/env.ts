import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		BETTER_AUTH_SECRET: z.string().min(1),
		BETTER_AUTH_URL: z.string().url(),
		EMAIL_SERVICE: z.string().min(1),
		EMAIL_USERNAME: z.string().min(1),
		EMAIL_PASSWORD: z.string().min(1),
	},
	client: {},
	experimental__runtimeEnv: {},
	skipValidation:
		!!process.env.SKIP_ENV_VALIDATION &&
		process.env.SKIP_ENV_VALIDATION !== 'false' &&
		process.env.SKIP_ENV_VALIDATION !== '0',
});
