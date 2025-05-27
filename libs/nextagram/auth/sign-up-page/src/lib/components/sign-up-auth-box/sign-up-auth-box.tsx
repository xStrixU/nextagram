import { AuthBox } from '@nextagram/nextagram-auth-shared';
import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { SignUpAuthBoxBottomSection } from './sign-up-auth-box-bottom-section';

import type { ReactNode } from 'react';

type SignUpAuthBoxProps = Readonly<{
	children: ReactNode;
}>;

export const SignUpAuthBox = async ({ children }: SignUpAuthBoxProps) => {
	const t = await getTranslations('auth.sign-up-page.auth-box');

	return (
		<AuthBox title={t('title')} bottomSection={<SignUpAuthBoxBottomSection />}>
			{children}
		</AuthBox>
	);
};
