import pick from 'lodash/pick';

import {
	NextIntlClientProvider,
	useMessages,
} from '@nextagram/nextagram-shared-i18n';

import type { ReactNode } from 'react';

type IndexPageMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const IndexPageMessages = ({ children }: IndexPageMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(messages, 'shared.errors.unexpected', 'index-page.post')}
		>
			{children}
		</NextIntlClientProvider>
	);
};
