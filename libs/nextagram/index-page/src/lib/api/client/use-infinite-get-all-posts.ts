import { useInfiniteQuery } from '@tanstack/react-query';

import type { PostDto } from '@nextagram/nextagram-shared-actions';

interface GetAllPostsParams {
	cursor: string | null;
}

export interface GetAllPostsResponse {
	posts: PostDto[];
	nextCursor?: string | null;
}

const getAllPosts = async ({
	cursor,
}: GetAllPostsParams): Promise<GetAllPostsResponse> => {
	const response = await fetch(
		`/api/posts${cursor ? `?cursor=${cursor}` : ''}`,
	);

	return response.json();
};

export const useInfiniteGetAllPosts = () => {
	const query = useInfiniteQuery({
		queryKey: ['posts'],
		queryFn: ({ pageParam }) => getAllPosts({ cursor: pageParam }),
		getNextPageParam: lastPage => lastPage.nextCursor,
		initialPageParam: null as string | null,
	});

	return query;
};
