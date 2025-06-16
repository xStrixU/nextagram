'use client';

import { useState } from 'react';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Button } from '@nextagram/nextagram-shared-ui';
import { Plus } from '@nextagram/nextagram-shared-ui/icons';

import { CreatePostDialog } from '../create-post-dialog/create-post-dialog';

export const SidebarCreateButton = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const t = useTranslations('layout.sidebar.create-post-dialog');

	return (
		<>
			<Button
				size="lg"
				aria-label={t('trigger')}
				className="max-md:w-10"
				fullWidth
				onClick={() => setIsDialogOpen(true)}
			>
				<Plus className="size-6 md:hidden" />
				<span className="hidden md:inline">{t('trigger')}</span>
			</Button>
			<CreatePostDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
		</>
	);
};
