import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { Dialog } from '@nextagram/nextagram-shared-ui';

import { EditProfileDialogProfilePictureSection } from './edit-profile-dialog-profile-picture-section/edit-profile-dialog-profile-picture-section';
import { EditProfileDialogPublicInformationSection } from './edit-profile-dialog-public-information-section/edit-profile-dialog-public-information-section';

import type { ReactNode } from 'react';

type EditProfileDialogProps = Readonly<{
	children: ReactNode;
}>;

export const EditProfileDialog = async ({
	children,
}: EditProfileDialogProps) => {
	const t = await getTranslations('layout.sidebar.edit-profile-dialog');

	return (
		<Dialog title={t('title')} trigger={children}>
			<EditProfileDialogProfilePictureSection />
			<EditProfileDialogPublicInformationSection />
		</Dialog>
	);
};
