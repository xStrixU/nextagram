import { getCurrentSession } from '@nextagram/nextagram-shared-session/server';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@nextagram/nextagram-shared-ui';

export const SidebarNavigationListProfileItemAvatarInner = async () => {
	const { user } = await getCurrentSession();

	if (!user) {
		return null;
	}

	return (
		<Avatar>
			<AvatarImage src={`${user.image}?width=64&height=64`} />
			<AvatarFallback />
		</Avatar>
	);
};
