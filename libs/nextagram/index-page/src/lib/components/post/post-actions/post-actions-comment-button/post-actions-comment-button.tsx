import { Comment } from '@nextagram/nextagram-shared-ui/icons';

import { PostActionsButton } from '../post-actions-button';

type PostActionsCommentButtonProps = Readonly<{
	'aria-label': string;
}>;

export const PostActionsCommentButton = ({
	'aria-label': ariaLabel,
}: PostActionsCommentButtonProps) => (
	<PostActionsButton aria-label={ariaLabel}>
		<Comment />
	</PostActionsButton>
);
