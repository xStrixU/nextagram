'use client';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Button } from '@nextagram/nextagram-shared-ui';
import { Plus } from '@nextagram/nextagram-shared-ui/icons';

export const SidebarCreateButton = () => {
	const t = useTranslations('layout.sidebar');

	return (
		<Button
			size="lg"
			aria-label={t('createButton')}
			className="max-md:w-10"
			fullWidth
		>
			<Plus className="size-6 md:hidden" />
			<span className="hidden md:inline">{t('createButton')}</span>
		</Button>
	);
};
