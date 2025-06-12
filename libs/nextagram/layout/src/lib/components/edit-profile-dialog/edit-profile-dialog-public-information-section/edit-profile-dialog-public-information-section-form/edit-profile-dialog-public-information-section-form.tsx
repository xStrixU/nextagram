'use client';

import { Form, FormField, FormItem } from '@nextagram/nextagram-shared-forms';
import { Button, Input, Textarea } from '@nextagram/nextagram-shared-ui';

import { useEditProfileDialogPublicInformationSectionForm } from './use-edit-profile-dialog-public-information-section-form';

import type { Session } from '@nextagram/nextagram-shared-session/types';

type EditProfileDialogPublicInformationSectionFormProps = Readonly<{
	user: Session['user'];
}>;

export const EditProfileDialogPublicInformationSectionForm = ({
	user,
}: EditProfileDialogPublicInformationSectionFormProps) => {
	const { form, isPending, handlePublicInformationUpdate, t } =
		useEditProfileDialogPublicInformationSectionForm({ user });

	return (
		<Form {...form}>
			<form onSubmit={handlePublicInformationUpdate} className="space-y-4">
				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem label={t('fullName')}>
							<Input placeholder={t('fullName')} {...field} />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="biography"
					render={({ field }) => (
						<FormItem label={t('biography')}>
							<Textarea placeholder={t('biography')} {...field} />
						</FormItem>
					)}
				/>
				<Button type="submit" isLoading={isPending} fullWidth>
					{t('submit')}
				</Button>
			</form>
		</Form>
	);
};
