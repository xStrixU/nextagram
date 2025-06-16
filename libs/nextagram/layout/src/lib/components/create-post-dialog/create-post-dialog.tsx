import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Dialog } from '@nextagram/nextagram-shared-ui';

import { CreatePostDialogForm } from './create-post-dialog-form/create-post-dialog-form';
import { CreatePostDialogMedia } from './create-post-dialog-media/create-post-dialog-media';
import { CreatePostDialogStoreProvider } from './create-post-dialog.store';

type CreatePostDialogProps = Readonly<{
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}>;

export const CreatePostDialog = ({
	isOpen,
	setIsOpen,
}: CreatePostDialogProps) => {
	const t = useTranslations('layout.sidebar.create-post-dialog');

	return (
		<Dialog title={t('title')} open={isOpen} onOpenChange={setIsOpen}>
			<CreatePostDialogStoreProvider>
				<CreatePostDialogMedia />
				<CreatePostDialogForm onDialogClose={() => setIsOpen(false)} />
			</CreatePostDialogStoreProvider>
		</Dialog>
	);
};
