import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { username } from 'better-auth/plugins';
import * as cookie from 'cookie';

import { getTranslations, routing } from '@nextagram/nextagram-shared-i18n';

import {
	PASSWORD_MIN_LENGTH,
	USERNAME_MIN_LENGTH,
	USERNAME_REGEX,
} from './constants';
import { db } from './database/db';
import * as schema from './database/schema';
import { sendEmail } from './email';

import type { Locale } from '@nextagram/nextagram-shared-i18n';

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		minPasswordLength: PASSWORD_MIN_LENGTH,
	},
	emailVerification: {
		sendVerificationEmail: async ({ user, url }, request) => {
			const cookieHeader = request?.headers.get('cookie') ?? '';
			const cookies = cookie.parse(cookieHeader);
			const locale = (cookies['NEXT_LOCALE'] ??
				routing.defaultLocale) as Locale;

			const t = await getTranslations({
				locale,
				namespace: 'auth.sign-up-page.email',
			});

			await sendEmail({
				to: user.email,
				subject: t('subject'),
				text: t('text', { url }),
			});
		},
	},
	plugins: [
		username({
			minUsernameLength: USERNAME_MIN_LENGTH,
			usernameValidator: username => USERNAME_REGEX.test(username),
		}),
	],
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: {
			accounts: schema.accountsTable,
			sessions: schema.sessionsTable,
			users: schema.usersTable,
			verifications: schema.verificationsTable,
		},
		usePlural: true,
	}),
});
