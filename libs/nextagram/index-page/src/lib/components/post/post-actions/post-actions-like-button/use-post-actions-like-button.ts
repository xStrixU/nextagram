import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';

import { useTogglePostLike } from '../../../../api/client/use-toggle-post-like';

import type { InfiniteData } from '@tanstack/react-query';

import type { GetAllPostsResponse } from '../../../../api/client/use-infinite-get-all-posts';

export const usePostActionsLikeButton = () => {
	const previousPostsRef = useRef<InfiniteData<GetAllPostsResponse>>(null);
	const queryClient = useQueryClient();
	const { togglePostLike } = useTogglePostLike({
		onExecute: async ({ input }) => {
			await queryClient.cancelQueries({ queryKey: ['posts'] });

			const previousPosts = queryClient.getQueryData<
				InfiniteData<GetAllPostsResponse>
			>(['posts']);

			if (!previousPosts) {
				return;
			}

			const postId = (input as FormData).get('postId');
			const newPosts = {
				...previousPosts,
				pages: previousPosts.pages.map(page => ({
					...page,
					posts: page.posts.map(post => {
						if (post.id === postId) {
							return {
								...post,
								isLiked: !post.isLiked,
								likes: post.isLiked ? post.likes - 1 : post.likes + 1,
							};
						}

						return post;
					}),
				})),
			};

			queryClient.setQueryData<InfiniteData<GetAllPostsResponse>>(
				['posts'],
				newPosts,
			);

			previousPostsRef.current = previousPosts ?? null;
		},
		onError: () => {
			const previousPosts = previousPostsRef.current;

			if (previousPosts) {
				queryClient.setQueryData<InfiniteData<GetAllPostsResponse>>(
					['posts'],
					previousPosts,
				);
			}
		},
		onSettled: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
	});

	return { togglePostLike };
};
