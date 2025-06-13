import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@nextagram/nextagram-shared-ui';

export const EditProfileDialogProfilePictureSectionAvatarInner = async () => {
	const { user } = await getCurrentSession();

	if (!user) {
		return null;
	}

	return (
		<Avatar className="size-32">
			<AvatarImage src={`${user.image}?width=128&height=128`} />
			<AvatarFallback />
		</Avatar>
	);
};
