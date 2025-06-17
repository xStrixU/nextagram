import { Suspense } from 'react';

import { PostListInner } from './post-list-inner';
import { PostListSkeleton } from './post-list-skeleton';

export const PostList = () => (
	<Suspense fallback={<PostListSkeleton />}>
		<PostListInner />
	</Suspense>
);
