import { betterFetch } from '@better-fetch/fetch';

import type { auth } from '../shared/auth/auth';

type Session = typeof auth.$Infer.Session;

interface FetchSessionProps {
	baseURL: string;
	cookie: string;
}

export const fetchSession = async ({ baseURL, cookie }: FetchSessionProps) => {
	const { data } = await betterFetch<Session>('/api/auth/get-session', {
		baseURL,
		headers: {
			cookie,
		},
	});

	return data;
};
