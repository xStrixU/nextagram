import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { toast } from '@nextagram/nextagram-shared-ui';

import { useUpdateCurrentUserPublicInformation } from '../../../../api/client/use-update-current-user-public-information';
import { editProfileDialogPublicInformationSectionFormSchema } from './edit-profile-dialog-public-information-section-form.schema';

import type { Session } from '@nextagram/nextagram-shared-session/types';

interface UseEditProfileDialogPublicInformationSectionFormParams {
	user: Session['user'];
}

export const useEditProfileDialogPublicInformationSectionForm = ({
	user,
}: UseEditProfileDialogPublicInformationSectionFormParams) => {
	const form = useZodForm(editProfileDialogPublicInformationSectionFormSchema, {
		defaultValues: {
			fullName: user.name,
			biography: user.biography,
		},
	});
	const { updateCurrentUserPublicInformation, isPending } =
		useUpdateCurrentUserPublicInformation();
	const t = useTranslations(
		'layout.sidebar.edit-profile-dialog.public-information.form',
	);

	const handlePublicInformationUpdate = form.handleSubmit(
		async ({ fullName, biography }) => {
			const { serverError } = await updateCurrentUserPublicInformation({
				fullName,
				biography,
			});

			if (serverError) {
				toast.error(serverError);
				return;
			}

			toast(t('success'));
		},
	);

	return {
		form,
		isPending,
		handlePublicInformationUpdate,
		t,
	};
};
