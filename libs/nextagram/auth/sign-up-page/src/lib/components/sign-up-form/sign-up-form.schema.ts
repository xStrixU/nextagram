import { z } from 'zod';

import {
	PASSWORD_MIN_LENGTH,
	USERNAME_MIN_LENGTH,
	USERNAME_REGEX,
} from '@nextagram/nextagram-shared-server/client';

export const signUpFormSchema = z
	.object({
		fullName: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.fullName.required'),
		username: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.username.required')
			.min(
				USERNAME_MIN_LENGTH,
				'auth.sign-up-page.form.errors.username.minLength',
			)
			.regex(USERNAME_REGEX, 'auth.sign-up-page.form.errors.username.invalid'),
		email: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.email.required')
			.email('auth.sign-up-page.form.errors.email.invalid'),
		password: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.password.required')
			.min(
				PASSWORD_MIN_LENGTH,
				'auth.sign-up-page.form.errors.password.minLength',
			),
		confirmPassword: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.confirmPassword.required'),
		termsAndConditions: z.boolean().refine(value => value, {
			message: 'auth.sign-up-page.form.errors.termsAndConditions.required',
		}),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'auth.sign-up-page.form.errors.confirmPassword.notMatch',
		path: ['confirmPassword'],
	});
