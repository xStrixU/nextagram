'use client';

import {
	QueryClient,
	QueryClientProvider,
	isServer,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { ReactNode } from 'react';

let browserQueryClient: QueryClient | undefined;

const makeQueryClient = () => new QueryClient();

const getQueryClient = () => {
	if (isServer) {
		return makeQueryClient();
	}

	if (!browserQueryClient) {
		browserQueryClient = makeQueryClient();
	}

	return browserQueryClient;
};

type TanStackQueryProviderProps = Readonly<{
	children: ReactNode;
}>;

export const TanStackQueryProvider = ({
	children,
}: TanStackQueryProviderProps) => {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};
