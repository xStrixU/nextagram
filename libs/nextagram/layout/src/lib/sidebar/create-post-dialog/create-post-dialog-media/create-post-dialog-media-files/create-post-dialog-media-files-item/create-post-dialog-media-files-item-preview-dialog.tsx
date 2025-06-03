import { Dialog } from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

type CreatePostDialogMediaFilesItemPreviewDialogProps = Readonly<{
	file: File;
	children: ReactNode;
}>;

export const CreatePostDialogMediaFilesItemPreviewDialog = ({
	file,
	children,
}: CreatePostDialogMediaFilesItemPreviewDialogProps) => (
	<Dialog trigger={children} title="Podgląd zdjęcia">
		<img
			src={URL.createObjectURL(file)}
			alt="Podgląd"
			className="w-full rounded-md object-contain"
		/>
	</Dialog>
);
