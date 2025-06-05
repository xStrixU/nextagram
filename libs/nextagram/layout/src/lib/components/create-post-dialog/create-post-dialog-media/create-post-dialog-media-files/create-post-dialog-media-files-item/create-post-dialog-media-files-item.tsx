import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { CreatePostDialogMediaFilesItemPreviewDialog } from './create-post-dialog-media-files-item-preview-dialog';
import { CreatePostDialogMediaFilesItemRemoveButton } from './create-post-dialog-media-files-item-remove-button/create-post-dialog-media-files-item-remove-button';

type CreatePostDialogMediaFilesItemProps = Readonly<{
	index: number;
	file: File;
}>;

export const CreatePostDialogMediaFilesItem = ({
	index,
	file,
}: CreatePostDialogMediaFilesItemProps) => {
	const t = useTranslations(
		'layout.sidebar.create-post-dialog.media.files.item',
	);

	return (
		<CreatePostDialogMediaFilesItemPreviewDialog file={file}>
			<div className="group relative cursor-pointer">
				<img
					src={URL.createObjectURL(file)}
					alt={t('description', { number: index + 1 })}
					className="size-64 rounded-md object-cover"
				/>
				<CreatePostDialogMediaFilesItemRemoveButton index={index} />
			</div>
		</CreatePostDialogMediaFilesItemPreviewDialog>
	);
};
