import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';

import { EditProfileDialogSection } from '../edit-profile-dialog-section';
import { EditProfileDialogPublicInformationSectionForm } from './edit-profile-dialog-public-information-section-form/edit-profile-dialog-public-information-section-form';

export const EditProfileDialogPublicInformationSection = async () => {
	const { user } = await getCurrentSession();
	const t = await getTranslations(
		'layout.sidebar.edit-profile-dialog.public-information',
	);

	if (!user) {
		return null;
	}

	return (
		<EditProfileDialogSection title={t('title')}>
			<EditProfileDialogPublicInformationSectionForm user={user} />
		</EditProfileDialogSection>
	);
};
