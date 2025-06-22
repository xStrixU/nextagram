import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { PostActionsCommentButton } from './post-actions-comment-button/post-actions-comment-button';
import { PostActionsLikeButton } from './post-actions-like-button/post-actions-like-button';

export const PostActions = () => {
	const t = useTranslations('index-page.post.actions');

	return (
		<div className="flex gap-3">
			<PostActionsLikeButton aria-label={t('like')} />
			<PostActionsCommentButton aria-label={t('comment')} />
		</div>
	);
};
