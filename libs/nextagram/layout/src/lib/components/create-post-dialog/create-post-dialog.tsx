import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Dialog } from '@nextagram/nextagram-shared-ui';

import { CreatePostDialogForm } from './create-post-dialog-form/create-post-dialog-form';
import { CreatePostDialogMedia } from './create-post-dialog-media/create-post-dialog-media';
import { CreatePostDialogStoreProvider } from './create-post-dialog.store';

import type { ReactNode } from 'react';

type CreatePostDialogProps = Readonly<{
	children: ReactNode;
}>;

export const CreatePostDialog = ({ children }: CreatePostDialogProps) => {
	const t = useTranslations('layout.sidebar.create-post-dialog');

	return (
		<Dialog title={t('title')} trigger={children}>
			<CreatePostDialogStoreProvider>
				<CreatePostDialogMedia />
				<CreatePostDialogForm />
			</CreatePostDialogStoreProvider>
		</Dialog>
	);
};
