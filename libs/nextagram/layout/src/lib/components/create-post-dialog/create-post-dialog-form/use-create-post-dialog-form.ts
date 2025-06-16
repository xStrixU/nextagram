import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { toast } from '@nextagram/nextagram-shared-ui';

import { useCreatePost } from '../../../api/client/use-create-post';
import { useCreatePostDialogStore } from '../create-post-dialog.store';
import { createPostDialogFormSchema } from './create-post-dialog-form.schema';

interface UseCreatePostDialogFormParams {
	onDialogClose: () => void;
}

export const useCreatePostDialogForm = ({
	onDialogClose,
}: UseCreatePostDialogFormParams) => {
	const form = useZodForm(createPostDialogFormSchema, {
		defaultValues: {
			description: '',
		},
	});
	const files = useCreatePostDialogStore(state => state.files);
	const { createPost, isPending } = useCreatePost();
	const t = useTranslations('layout.sidebar.create-post-dialog.form');

	const handlePostCreate = form.handleSubmit(async ({ description }) => {
		const { serverError } = await createPost({ description, files });

		if (serverError) {
			toast.error(serverError);
			return;
		}

		toast(t('success'));
		onDialogClose();
	});

	return { form, isPending, handlePostCreate, t };
};
