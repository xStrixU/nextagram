import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { PostActions } from './post-actions/post-actions';
import { PostAuthor } from './post-author/post-author';
import { PostDescription } from './post-description/post-description';
import { PostFilesCarousel } from './post-files-carousel';
import { PostLikes } from './post-likes';

import type { PostDto } from '@nextagram/nextagram-shared-actions';

type PostProps = Readonly<{
	post: PostDto;
}>;

export const Post = ({ post }: PostProps) => {
	const t = useTranslations('index-page.post');

	return (
		<article className="border-separator max-w-post-width w-full space-y-3 border-b py-2">
			<PostAuthor author={post.author} postCreatedAt={post.createdAt} />
			<PostFilesCarousel post={post} />
			<div className="space-y-1.5">
				<PostActions post={post} />
				<PostLikes likes={post.likes} />
				<PostDescription post={post} messages={{ more: t('more') }} />
			</div>
		</article>
	);
};
