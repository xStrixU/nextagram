import { NextResponse } from 'next/server';

import { mapPostToPostDto } from '@nextagram/nextagram-shared-actions';
import { postsService } from '@nextagram/nextagram-shared-server';

import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
	const cursor = request.nextUrl.searchParams.get('cursor');
	const limit = Number(request.nextUrl.searchParams.get('limit') ?? '5');

	const posts = await postsService.getAll({
		limit,
		...(cursor && { cursor }),
	});

	return NextResponse.json({
		posts: posts.map(mapPostToPostDto),
		nextCursor: posts.length >= limit ? posts.at(-1)?.id : null,
	});
};
