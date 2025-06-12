import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';
import { UserAvatar } from '@nextagram/nextagram-shared-users';

export const EditProfileDialogProfilePictureSectionAvatarInner = async () => {
	const { user } = await getCurrentSession();

	if (!user) {
		return null;
	}

	return <UserAvatar user={user} size={128} />;
};
