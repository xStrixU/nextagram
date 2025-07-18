import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { username } from 'better-auth/plugins';
import * as cookie from 'cookie';

import { getTranslations, routing } from '@nextagram/nextagram-shared-i18n';

import { usersService } from '../../users';
import {
	PASSWORD_MIN_LENGTH,
	USERNAME_MIN_LENGTH,
	USERNAME_REGEX,
} from '../constants';
import { db } from '../database/db';
import * as schema from '../database/schema';
import { sendEmail } from '../email';

import 'better-auth/social-providers';

import { env } from '@nextagram/nextagram-shared-env';

import { generateSocialUsername } from './generate-social-username';

import type { Locale } from '@nextagram/nextagram-shared-i18n';

import type { User } from '../../users/users.types';

export const auth = betterAuth({
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ['facebook', 'google'],
		},
	},
	user: {
		additionalFields: {
			biography: {
				type: 'string',
			},
			image: {
				type: 'string',
			},
			username: {
				type: 'string',
			},
		},
	},
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
	socialProviders: {
		facebook: {
			clientId: env.FACEBOOK_CLIENT_ID,
			clientSecret: env.FACEBOOK_CLIENT_SECRET,
			mapProfileToUser: async profile => {
				const username = await generateSocialUsername(profile.name);

				return {
					username,
					name: profile.name,
					email: profile.email,
				};
			},
		},
		google: {
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			mapProfileToUser: async profile => {
				const username = await generateSocialUsername(profile.name);

				return {
					username,
					name: profile.name,
					email: profile.email,
				};
			},
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
	databaseHooks: {
		user: {
			create: {
				after: async user => {
					await usersService.updateProfilePicture({
						user: user as User,
						file: null,
					});
				},
			},
		},
	},
});
