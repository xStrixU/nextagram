import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { Button } from '@nextagram/nextagram-shared-ui';
import { Facebook, Google } from '@nextagram/nextagram-shared-ui/icons';

export const AuthBoxContinueWithSocials = async () => {
	const t = await getTranslations('auth.shared.auth-box.continue-with');

	return (
		<div className="flex gap-4">
			<Button variant="outline" className="grow">
				<Google className="size-5" />
				{t('google')}
			</Button>
			<Button variant="outline" className="grow">
				<Facebook className="size-5" />
				{t('facebook')}
			</Button>
		</div>
	);
};
