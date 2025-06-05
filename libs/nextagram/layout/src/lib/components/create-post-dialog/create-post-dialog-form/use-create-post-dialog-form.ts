import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { useCreatePostDialogStore } from '../create-post-dialog.store';
import { createPostDialogFormSchema } from './create-post-dialog-form.schema';

export const useCreatePostDialogForm = () => {
	const form = useZodForm(createPostDialogFormSchema, {
		defaultValues: {
			description: '',
		},
	});
	const files = useCreatePostDialogStore(state => state.files);
	const t = useTranslations('layout.sidebar.create-post-dialog.form');

	const handlePostCreate = form.handleSubmit(data => {
		console.log({ files, data });
	});

	return { form, handlePostCreate, t };
};
