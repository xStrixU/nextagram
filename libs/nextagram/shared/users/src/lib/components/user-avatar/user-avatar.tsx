import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@nextagram/nextagram-shared-ui';

import { getExpiresQueryParam } from './user-avatar.utils';

import type { UserDto } from '@nextagram/nextagram-shared-server';

type UserAvatarProps = Readonly<{
	user: UserDto;
	size?: number;
}>;

export const UserAvatar = ({ user, size = 32 }: UserAvatarProps) => {
	const expires = getExpiresQueryParam(user.updatedAt);

	return (
		<Avatar style={{ ...(size && { width: size, height: size }) }}>
			<AvatarImage
				src={`${user.image}?width=${size}&height=${size}&expires=${expires}`}
			/>
			<AvatarFallback />
		</Avatar>
	);
};
