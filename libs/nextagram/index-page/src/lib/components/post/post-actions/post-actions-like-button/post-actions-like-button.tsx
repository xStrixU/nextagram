import { Heart, HeartFill } from '@nextagram/nextagram-shared-ui/icons';

import { PostActionsButton } from '../post-actions-button';
import { usePostActionsLikeButton } from './use-post-actions-like-button';

import type { PostDto } from '@nextagram/nextagram-shared-server';

type PostActionsLikeButtonProps = Readonly<{
	'aria-label': string;
	post: PostDto;
}>;

export const PostActionsLikeButton = ({
	'aria-label': ariaLabel,
	post,
}: PostActionsLikeButtonProps) => {
	const { togglePostLike } = usePostActionsLikeButton();

	return (
		<form action={togglePostLike}>
			<input type="hidden" name="postId" value={post.id} />
			<PostActionsButton aria-label={ariaLabel} type="submit">
				{post.isLiked ? <HeartFill className="text-red-500" /> : <Heart />}
			</PostActionsButton>
		</form>
	);
};
