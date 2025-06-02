import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { cn } from '@nextagram/nextagram-shared-utils-styling';

export const AuthBoxContinueWithSeparator = async () => {
	const t = await getTranslations('auth.shared.auth-box.continue-with');

	return (
		<p
			className={cn(
				'flex items-center text-sm font-medium text-nowrap',
				'before:bg-separator before:mr-6 before:h-px before:w-full',
				'after:bg-separator after:ml-6 after:h-px after:w-full',
			)}
		>
			{t('content')}
		</p>
	);
};
