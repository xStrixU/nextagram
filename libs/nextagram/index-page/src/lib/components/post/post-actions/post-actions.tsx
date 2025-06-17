import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { PostActionsCommentButton } from './post-actions-comment-button/post-actions-comment-button';
import { PostActionsLikeButton } from './post-actions-like-button/post-actions-like-button';

export const PostActions = async () => {
	const t = await getTranslations('index-page.post.actions');

	return (
		<div className="flex gap-3">
			<PostActionsLikeButton aria-label={t('like')} />
			<PostActionsCommentButton aria-label={t('comment')} />
		</div>
	);
};
