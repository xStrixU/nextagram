import { Button } from '@nextagram/nextagram-shared-ui';
import { Close } from '@nextagram/nextagram-shared-ui/icons';

import { useCreatePostDialogMediaFilesItemRemoveButton } from './use-create-post-dialog-media-files-item-remove-button';

type CreatePostDialogMediaFilesItemRemoveButtonProps = Readonly<{
	index: number;
}>;

export const CreatePostDialogMediaFilesItemRemoveButton = ({
	index,
}: CreatePostDialogMediaFilesItemRemoveButtonProps) => {
	const { handleFileRemove, t } = useCreatePostDialogMediaFilesItemRemoveButton(
		{ index },
	);

	return (
		<Button
			size="icon"
			aria-label={t('remove', { number: index + 1 })}
			onClick={handleFileRemove}
			className="absolute top-2 right-2 rounded-full opacity-0 transition-opacity duration-400 group-hover:opacity-100"
		>
			<Close className="size-5" />
		</Button>
	);
};
