import pick from 'lodash/pick';

import {
	NextIntlClientProvider,
	useMessages,
} from '@nextagram/nextagram-shared-i18n';

import type { ReactNode } from 'react';

type LayoutMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const LayoutMessages = ({ children }: LayoutMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider messages={pick(messages, 'layout')}>
			{children}
		</NextIntlClientProvider>
	);
};
