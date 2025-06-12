'use client';

import { Button } from '@nextagram/nextagram-shared-ui';
import { Trash } from '@nextagram/nextagram-shared-ui/icons';

import { useEditProfileDialogProfilePictureSectionResetButton } from './use-edit-profile-dialog-profile-picture-section-reset-button';

export const EditProfileDialogProfilePictureSectionResetButton = () => {
	const { deleteCurrentUserProfilePicture, isPending, t } =
		useEditProfileDialogProfilePictureSectionResetButton();

	return (
		<form action={deleteCurrentUserProfilePicture}>
			<Button type="submit" variant="outline" size="lg" isLoading={isPending}>
				<Trash className="text-red-600" />
				{t('label')}
			</Button>
		</form>
	);
};
