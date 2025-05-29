import { z } from 'zod';

type AuthError = z.infer<typeof authErrorSchema>;

const authErrorSchema = z.object({
	status: z.number(),
	statusText: z.string(),
	code: z.string().optional(),
	message: z.string().optional(),
});

export const isAuthError = (error: unknown): error is AuthError => {
	const { success } = authErrorSchema.safeParse(error);

	return success;
};
