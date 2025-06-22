import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef } from 'react';

import { useInfiniteGetAllPosts } from '../../api/client/use-infinite-get-all-posts';

export const useInfinitePosts = () => {
	const parentRef = useRef<HTMLDivElement>(null);
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteGetAllPosts();

	const posts = data?.pages.flatMap(({ posts }) => posts) ?? [];

	const rowVirtualizer = useVirtualizer({
		count: hasNextPage ? posts.length + 1 : posts.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 45,
	});

	const items = rowVirtualizer.getVirtualItems();

	useEffect(() => {
		const [lastItem] = [...items].reverse();

		if (!lastItem) {
			return;
		}

		if (
			lastItem.index >= posts.length - 1 &&
			hasNextPage &&
			!isFetchingNextPage
		) {
			fetchNextPage();
		}
	}, [fetchNextPage, hasNextPage, isFetchingNextPage, items, posts.length]);

	return {
		parentRef,
		hasNextPage,
		status,
		posts,
		rowVirtualizer,
		items,
	};
};
