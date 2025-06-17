import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { PostActions } from './post-actions/post-actions';
import { PostAuthor } from './post-author/post-author';
import { PostDescription } from './post-description/post-description';
import { PostFilesCarousel } from './post-files-carousel';
import { PostLikes } from './post-likes';
import { PostSkeleton } from './post-skeleton';

import type { PostDto } from '@nextagram/nextagram-shared-server';

type PostProps = Readonly<{
	post: PostDto;
}>;

export const Post = async ({ post }: PostProps) => {
	const t = await getTranslations('index-page.post');

	return (
		<article className="border-separator max-w-post-width w-full space-y-3 border-b py-2">
			<PostAuthor author={post.author} postCreatedAt={post.createdAt} />
			<PostFilesCarousel post={post} />
			<div className="space-y-1.5">
				<PostActions />
				<PostLikes />
				<PostDescription post={post} messages={{ more: t('more') }} />
			</div>
		</article>
	);
};

Post.Skeleton = PostSkeleton;
