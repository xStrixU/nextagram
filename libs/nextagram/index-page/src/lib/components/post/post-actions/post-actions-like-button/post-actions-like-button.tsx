import { Heart } from '@nextagram/nextagram-shared-ui/icons';

import { PostActionsButton } from '../post-actions-button';

type PostActionsLikeButtonProps = Readonly<{
	'aria-label': string;
}>;

export const PostActionsLikeButton = ({
	'aria-label': ariaLabel,
}: PostActionsLikeButtonProps) => (
	<PostActionsButton aria-label={ariaLabel}>
		<Heart />
	</PostActionsButton>
);
