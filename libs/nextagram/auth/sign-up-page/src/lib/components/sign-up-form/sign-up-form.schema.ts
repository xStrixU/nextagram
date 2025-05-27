import { z } from 'zod';

export const signUpFormSchema = z
	.object({
		fullName: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.fullName.required'),
		username: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.username.required')
			.min(3, 'auth.sign-up-page.form.errors.username.minLength')
			.regex(/^[a-z0-9_]*$/, 'auth.sign-up-page.form.errors.username.invalid'),
		email: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.email.required')
			.email('auth.sign-up-page.form.errors.email.invalid'),
		password: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.password.required')
			.min(6, 'auth.sign-up-page.form.errors.password.minLength'),
		confirmPassword: z
			.string()
			.min(1, 'auth.sign-up-page.form.errors.confirmPassword.required'),
		termsAndConditions: z.boolean().refine(value => value, {
			message: 'auth.sign-up-page.form.errors.termsAndConditions.required',
		}),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'confirmPassword.notMatch',
		path: ['confirmPassword'],
	});
