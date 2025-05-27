import { z } from 'zod';

export const signInFormSchema = z.object({
	login: z.string().min(1, 'auth.sign-in-page.form.errors.login.required'),
	password: z
		.string()
		.min(1, 'auth.sign-in-page.form.errors.password.required'),
	rememberMe: z.boolean(),
});
