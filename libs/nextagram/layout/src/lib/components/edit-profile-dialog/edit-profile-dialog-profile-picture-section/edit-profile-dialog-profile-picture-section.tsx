import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { EditProfileDialogSection } from '../edit-profile-dialog-section';
import { EditProfileDialogProfilePictureSectionAvatar } from './edit-profile-dialog-profile-picture-section-avatar/edit-profile-dialog-profile-picture-section-avatar';
import { EditProfileDialogProfilePictureSectionResetButton } from './edit-profile-dialog-profile-picture-section-reset-button/edit-profile-dialog-profile-picture-section-reset-button';
import { EditProfileDialogProfilePictureSectionUploadButton } from './edit-profile-dialog-profile-picture-section-upload-button/edit-profile-dialog-profile-picture-section-upload-button';

export const EditProfileDialogProfilePictureSection = async () => {
	const t = await getTranslations(
		'layout.sidebar.edit-profile-dialog.profile-picture',
	);

	return (
		<EditProfileDialogSection title={t('title')}>
			<div className="flex items-center justify-center gap-5">
				<EditProfileDialogProfilePictureSectionAvatar />
				<div className="space-y-2.5">
					<EditProfileDialogProfilePictureSectionUploadButton />
					<EditProfileDialogProfilePictureSectionResetButton />
				</div>
			</div>
		</EditProfileDialogSection>
	);
};
