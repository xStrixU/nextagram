import { NextIntlClientProvider } from '@nextagram/nextagram-shared-i18n';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<NextIntlClientProvider messages={null}>{children}</NextIntlClientProvider>
);
