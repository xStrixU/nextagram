import { useCreatePostDialogStore } from '../../../create-post-dialog.store';
import { mimeTypes } from '../create-post-dialog-media-upload.constants';

import type { DragEvent } from 'react';

export const useCreatePostDialogMediaUploadFileDropzone = () => {
	const setFiles = useCreatePostDialogStore(state => state.setFiles);

	const handleFileDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();

		const files = [...event.dataTransfer.files];
		const filteredFiles = files.filter(file => mimeTypes.includes(file.type));

		setFiles(filteredFiles);
	};

	return { handleFileDrop };
};
