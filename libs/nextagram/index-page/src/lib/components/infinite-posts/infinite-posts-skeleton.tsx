import { PostSkeleton } from '../post/post-skeleton';

export const InfinitePostsSkeleton = () => (
	<div className="flex flex-col items-center px-2 py-4">
		{Array.from({ length: 10 }).map((_, i) => (
			<PostSkeleton key={i} />
		))}
	</div>
);
