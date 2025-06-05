'use client';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Button } from '@nextagram/nextagram-shared-ui';
import { Facebook, Google } from '@nextagram/nextagram-shared-ui/icons';

import { signInWithSocial } from '../../../lib/sign-in-with-social';

export const AuthBoxContinueWithSocials = () => {
	const t = useTranslations('auth.shared.auth-box.continue-with');

	return (
		<div className="flex gap-4">
			<Button
				variant="outline"
				className="grow"
				onClick={() => signInWithSocial('google')}
			>
				<Google className="size-5" />
				{t('google')}
			</Button>
			<Button
				variant="outline"
				className="grow"
				onClick={() => signInWithSocial('facebook')}
			>
				<Facebook className="size-5" />
				{t('facebook')}
			</Button>
		</div>
	);
};
