import { Button } from '@nextagram/nextagram-shared-ui';

import { mimeTypes } from '../../create-post-dialog-media-upload.constants';
import { useCreatePostDialogMediaUploadContentButton } from './use-create-post-dialog-media-upload-content-button';

export const CreatePostDialogMediaUploadContentButton = () => {
	const { inputRef, handleFileUpload, t } =
		useCreatePostDialogMediaUploadContentButton();

	return (
		<>
			<Button variant="outline" onClick={() => inputRef.current?.click()}>
				{t('button')}
			</Button>
			<input
				ref={inputRef}
				type="file"
				multiple
				accept={mimeTypes.join(',')}
				onChange={handleFileUpload}
				className="hidden"
			/>
		</>
	);
};
