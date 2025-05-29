import { NextResponse } from 'next/server';
import { pathToRegexp } from 'path-to-regexp';

import i18nMiddleware from '@nextagram/nextagram-shared-i18n/middleware';
import { fetchSession } from '@nextagram/nextagram-shared-server/middleware';

import type { NextRequest } from 'next/server';

const notAuthenticatedRoutes = [
	pathToRegexp('{/:locale}/sign-in'),
	pathToRegexp('{/:locale}/sign-up'),
];

export const middleware = async (request: NextRequest) => {
	const { nextUrl } = request;

	const i18nResponse = i18nMiddleware(request);
	const locale = i18nResponse.headers.get(
		'x-middleware-request-x-next-intl-locale',
	);

	const session = await fetchSession({
		baseURL: nextUrl.origin,
		cookie: request.headers.get('cookie') ?? '',
	});
	const isNotAuthenticatedRoute = !!notAuthenticatedRoutes.some(({ regexp }) =>
		regexp.test(nextUrl.pathname),
	);

	if (session && isNotAuthenticatedRoute) {
		return NextResponse.redirect(new URL(`${locale}`, nextUrl.origin));
	}

	if (!session && !isNotAuthenticatedRoute) {
		return NextResponse.redirect(new URL(`/${locale}/sign-in`, nextUrl.origin));
	}

	return i18nResponse;
};

export const config = {
	matcher: '/((?!api|_next/static|_next/image|favicon.ico|_vercel).*)',
};
