import { useCreatePostDialogMediaUploadFileDropzone } from './use-create-post-dialog-media-upload-file-dropzone';

import type { ReactNode } from 'react';

type CreatePostDialogMediaUploadFileDropzoneProps = Readonly<{
	children: ReactNode;
}>;

export const CreatePostDialogMediaUploadFileDropzone = ({
	children,
}: CreatePostDialogMediaUploadFileDropzoneProps) => {
	const { handleFileDrop } = useCreatePostDialogMediaUploadFileDropzone();

	return (
		<div
			onDragOver={e => e.preventDefault()}
			onDrop={handleFileDrop}
			className="flex justify-center"
		>
			{children}
		</div>
	);
};
