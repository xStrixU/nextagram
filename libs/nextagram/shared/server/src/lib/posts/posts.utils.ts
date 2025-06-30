import type { User } from '../users';
import type { Post } from './posts.types';
import type { PostEntity } from './posts.types';

interface PostWithLikeCheck {
	post: PostEntity;
	user: User;
}

export const postEntityWithLikeCheck = ({
	post,
	user,
}: PostWithLikeCheck): Post => {
	const isLiked = post.likes.some(like => like.userId === user.id);

	return {
		...post,
		isLiked,
	};
};
