import { NextIntlClientProvider } from '@nextagram/nextagram-shared-i18n';

import { TanStackQueryProvider } from './tanstack-query-provider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<NextIntlClientProvider messages={null}>
		<TanStackQueryProvider>{children}</TanStackQueryProvider>
	</NextIntlClientProvider>
);
