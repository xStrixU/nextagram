import { useRef } from 'react';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { toast } from '@nextagram/nextagram-shared-ui';

import { useUpdateCurrentUserProfilePicture } from '../../../../api/client/use-update-current-user-profile-picture';

import type { ChangeEvent } from 'react';

export const useEditProfileDialogProfilePictureSectionUploadButton = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { updateCurrentUserProfilePicture, isPending } =
		useUpdateCurrentUserProfilePicture();
	const t = useTranslations(
		'layout.sidebar.edit-profile-dialog.profile-picture.upload',
	);

	const handleProfilePicutreUpload = async ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		if (!target.files?.length) {
			return;
		}

		const file = target.files[0];
		const { serverError } = await updateCurrentUserProfilePicture({ file });

		if (serverError) {
			toast.error(serverError);
			return;
		}

		toast(t('success'));
	};

	return { inputRef, isPending, handleProfilePicutreUpload, t };
};
