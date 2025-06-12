'use client';

import { Button } from '@nextagram/nextagram-shared-ui';

import { useEditProfileDialogProfilePictureSectionUploadButton } from './use-edit-profile-dialog-profile-picture-section-upload-button';

export const EditProfileDialogProfilePictureSectionUploadButton = () => {
	const { inputRef, isPending, handleProfilePicutreUpload, t } =
		useEditProfileDialogProfilePictureSectionUploadButton();

	return (
		<>
			<Button
				size="lg"
				isLoading={isPending}
				onClick={() => inputRef.current?.click()}
			>
				{t('label')}
			</Button>
			<input
				ref={inputRef}
				type="file"
				accept="image/jpeg,image/png"
				onChange={handleProfilePicutreUpload}
				className="hidden"
			/>
		</>
	);
};
