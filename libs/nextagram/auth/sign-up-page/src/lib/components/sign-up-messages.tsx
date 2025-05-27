import pick from 'lodash/pick';

import {
	NextIntlClientProvider,
	useMessages,
} from '@nextagram/nextagram-shared-i18n';

import type { ReactNode } from 'react';

type SignUpMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SignUpMessages = ({ children }: SignUpMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(messages, 'auth.shared', 'auth.sign-up-page')}
		>
			{children}
		</NextIntlClientProvider>
	);
};
