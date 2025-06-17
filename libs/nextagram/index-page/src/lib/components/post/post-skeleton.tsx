import { Skeleton } from '@nextagram/nextagram-shared-ui';

export const PostSkeleton = () => (
	<div className="border-separator max-w-post-width w-full space-y-3 border-b py-2">
		<div className="flex items-center gap-1.5">
			<Skeleton className="h-8 w-8 rounded-full" />
			<Skeleton className="h-5 w-48" />
		</div>
		<Skeleton className="h-post-height rounded-md" />
		<Skeleton className="h-28" />
	</div>
);
