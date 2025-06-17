import { Post } from '../post/post';

export const PostListSkeleton = () => (
	<ul>
		{Array.from({ length: 10 }).map((_, i) => (
			<li key={i} className="flex justify-center">
				<Post.Skeleton />
			</li>
		))}
	</ul>
);
