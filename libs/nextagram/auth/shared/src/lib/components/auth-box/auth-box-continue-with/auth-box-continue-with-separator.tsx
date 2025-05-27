import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { cn } from '@nextagram/nextagram-shared-utils-styling';

export const AuthBoxContinueWithSeparator = async () => {
	const t = await getTranslations('auth.shared.auth-box.continue-with');

	return (
		<p
			className={cn(
				'flex items-center text-sm font-medium text-nowrap',
				'before:mr-6 before:h-px before:w-full before:bg-neutral-300',
				'after:ml-6 after:h-px after:w-full after:bg-neutral-300',
			)}
		>
			{t('content')}
		</p>
	);
};
