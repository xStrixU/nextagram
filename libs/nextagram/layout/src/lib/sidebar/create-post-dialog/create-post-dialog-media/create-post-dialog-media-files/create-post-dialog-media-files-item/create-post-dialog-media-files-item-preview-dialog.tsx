import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Dialog } from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

type CreatePostDialogMediaFilesItemPreviewDialogProps = Readonly<{
	file: File;
	children: ReactNode;
}>;

export const CreatePostDialogMediaFilesItemPreviewDialog = ({
	file,
	children,
}: CreatePostDialogMediaFilesItemPreviewDialogProps) => {
	const t = useTranslations(
		'layout.sidebar.create-post-dialog.media.files.item.preview-dialog',
	);

	return (
		<Dialog trigger={children} title={t('title')}>
			<img
				src={URL.createObjectURL(file)}
				alt={t('alt')}
				className="w-full rounded-md object-contain"
			/>
		</Dialog>
	);
};
