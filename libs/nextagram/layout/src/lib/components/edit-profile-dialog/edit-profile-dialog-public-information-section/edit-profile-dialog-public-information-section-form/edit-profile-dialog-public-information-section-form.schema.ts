import { z } from 'zod';

export const editProfileDialogPublicInformationSectionFormSchema = z.object({
	fullName: z
		.string()
		.min(
			1,
			'layout.sidebar.edit-profile-dialog.public-information.form.errors.fullName.required',
		),
	biography: z.string(),
});
