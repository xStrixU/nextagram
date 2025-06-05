import { z } from 'zod';

export const createPostDialogFormSchema = z.object({
	description: z
		.string()
		.min(
			1,
			'layout.sidebar.create-post-dialog.form.errors.description.required',
		),
});
