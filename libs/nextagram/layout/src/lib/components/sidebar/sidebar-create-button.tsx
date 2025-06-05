'use client';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Button } from '@nextagram/nextagram-shared-ui';
import { Plus } from '@nextagram/nextagram-shared-ui/icons';

import { CreatePostDialog } from '../create-post-dialog/create-post-dialog';

import type { ComponentProps } from 'react';

type SidebarCreateButtonProps = ComponentProps<typeof Button>;

export const SidebarCreateButton = (props: SidebarCreateButtonProps) => {
	const t = useTranslations('layout.sidebar.create-post-dialog');

	return (
		<CreatePostDialog>
			<Button
				size="lg"
				aria-label={t('trigger')}
				className="max-md:w-10"
				fullWidth
				{...props}
			>
				<Plus className="size-6 md:hidden" />
				<span className="hidden md:inline">{t('trigger')}</span>
			</Button>
		</CreatePostDialog>
	);
};
