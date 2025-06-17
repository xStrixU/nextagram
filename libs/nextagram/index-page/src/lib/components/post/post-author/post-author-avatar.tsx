import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@nextagram/nextagram-shared-ui';

type PostAuthorAvatarProps = Readonly<{
	image: string;
}>;

export const PostAuthorAvatar = ({ image }: PostAuthorAvatarProps) => (
	<Avatar>
		<AvatarImage src={image} />
		<AvatarFallback />
	</Avatar>
);
