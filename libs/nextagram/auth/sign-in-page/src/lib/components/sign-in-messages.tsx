import pick from 'lodash/pick';

import {
	NextIntlClientProvider,
	useMessages,
} from '@nextagram/nextagram-shared-i18n';

import type { ReactNode } from 'react';

type SignInMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SignInMessages = ({ children }: SignInMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(
				messages,
				'shared.errors',
				'auth.shared',
				'auth.sign-in-page',
			)}
		>
			{children}
		</NextIntlClientProvider>
	);
};
