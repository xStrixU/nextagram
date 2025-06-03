'use client';

import { useCreatePostDialogStore } from '../create-post-dialog.store';
import { CreatePostDialogMediaFiles } from './create-post-dialog-media-files/create-post-dialog-media-files';
import { CreatePostDialogMediaUpload } from './create-post-dialog-media-upload/create-post-dialog-media-upload';

export const CreatePostDialogMedia = () => {
	const files = useCreatePostDialogStore(state => state.files);

	if (files.length === 0) {
		return <CreatePostDialogMediaUpload />;
	}

	return <CreatePostDialogMediaFiles />;
};
