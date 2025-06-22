import { cn } from '@nextagram/nextagram-shared-utils-styling';

import { usePostDescription } from './use-post-description';

import type { PostDto } from '@nextagram/nextagram-shared-server';

type PostDescriptionProps = Readonly<{
	post: PostDto;
	messages: {
		more: string;
	};
}>;

export const PostDescription = ({ post, messages }: PostDescriptionProps) => {
	const { ref, isExpanded, height, handleContentExpand } = usePostDescription();

	return (
		<div className="flex flex-col-reverse items-start gap-y-0.5">
			{!isExpanded && height > 40 && (
				<button
					type="button"
					onClick={handleContentExpand}
					className="cursor-pointer text-sm font-bold text-neutral-700"
				>
					{messages.more}
				</button>
			)}
			<div
				className={cn('max-h-10 overflow-hidden', isExpanded && 'max-h-none')}
			>
				<p ref={ref} className="text-sm">
					{post.description}
				</p>
			</div>
		</div>
	);
};
