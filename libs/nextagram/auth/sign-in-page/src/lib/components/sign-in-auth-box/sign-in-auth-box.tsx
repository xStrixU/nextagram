import { AuthBox } from '@nextagram/nextagram-auth-shared';
import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { SignInAuthBoxBottomSection } from './sign-in-auth-box-bottom-section';

import type { ReactNode } from 'react';

type SignInAuthBoxProps = Readonly<{
	children: ReactNode;
}>;

export const SignInAuthBox = async ({ children }: SignInAuthBoxProps) => {
	const t = await getTranslations('auth.sign-in-page.auth-box');

	return (
		<AuthBox title={t('title')} bottomSection={<SignInAuthBoxBottomSection />}>
			{children}
		</AuthBox>
	);
};
