import { Suspense } from 'react';

import { Avatar, AvatarFallback } from '@nextagram/nextagram-shared-ui';

import { EditProfileDialogProfilePictureSectionAvatarInner } from './edit-profile-dialog-profile-picture-section-avatar-inner';

export const EditProfileDialogProfilePictureSectionAvatar = () => (
	<Suspense
		fallback={
			<Avatar className="size-32">
				<AvatarFallback />
			</Avatar>
		}
	>
		<EditProfileDialogProfilePictureSectionAvatarInner />
	</Suspense>
);
