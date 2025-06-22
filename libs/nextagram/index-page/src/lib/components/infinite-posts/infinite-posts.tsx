'use client';

import { useBodyHeight } from '../../hooks/use-body-height';
import { Post } from '../post/post';
import { PostSkeleton } from '../post/post-skeleton';
import { InfinitePostsError } from './infinite-posts-error';
import { InfinitePostsSkeleton } from './infinite-posts-skeleton';
import { useInfinitePosts } from './use-infinite-posts';

export const InfinitePosts = () => {
	const { parentRef, hasNextPage, status, posts, rowVirtualizer, items } =
		useInfinitePosts();
	const bodyHeight = useBodyHeight();

	if (status === 'pending') {
		return <InfinitePostsSkeleton />;
	}

	if (status === 'error') {
		return <InfinitePostsError />;
	}

	return (
		<div
			ref={parentRef}
			style={{ height: bodyHeight }}
			className="overflow-y-auto px-2 py-4 contain-strict"
		>
			<div
				style={{
					height: rowVirtualizer.getTotalSize(),
				}}
				className="relative"
			>
				<div
					style={{
						transform: `translateY(${items[0]?.start ?? 0}px)`,
					}}
					className="absolute top-0 left-0 w-full"
				>
					{items.map(virtualRow => {
						const isLoaderRow = virtualRow.index > posts.length - 1;
						const post = posts[virtualRow.index];

						return (
							<div
								key={virtualRow.key}
								data-index={virtualRow.key}
								ref={rowVirtualizer.measureElement}
								className="flex justify-center"
							>
								{isLoaderRow ? (
									hasNextPage ? (
										<PostSkeleton />
									) : null
								) : (
									<Post post={post} />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
