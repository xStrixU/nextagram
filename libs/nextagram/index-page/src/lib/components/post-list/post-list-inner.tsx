import { getAllPosts } from '../../api/server/get-all-posts';
import { Post } from '../post/post';

export const PostListInner = async () => {
	const posts = await getAllPosts();

	return (
		<ul>
			{posts.map(post => (
				<li key={post.id} className="flex justify-center">
					<Post post={post} />
				</li>
			))}
		</ul>
	);
};
