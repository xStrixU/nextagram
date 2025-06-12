import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { toast } from '@nextagram/nextagram-shared-ui';

import { useDeleteCurrentUserProfilePicture } from '../../../../api/client/use-delete-current-user-profile-picture';

export const useEditProfileDialogProfilePictureSectionResetButton = () => {
	const t = useTranslations(
		'layout.sidebar.edit-profile-dialog.profile-picture.reset',
	);
	const { deleteCurrentUserProfilePicture, isPending } =
		useDeleteCurrentUserProfilePicture({
			onSuccess: () => {
				toast(t('success'));
			},
			onError: ({ error }) => {
				toast.error(error.serverError);
			},
		});

	return { deleteCurrentUserProfilePicture, isPending, t };
};
