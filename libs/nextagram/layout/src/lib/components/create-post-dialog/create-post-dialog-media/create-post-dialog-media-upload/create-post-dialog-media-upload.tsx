import { CreatePostDialogMediaUploadContent } from './create-post-dialog-media-upload-content/create-post-dialog-media-upload-content';
import { CreatePostDialogMediaUploadFileDropzone } from './create-post-dialog-media-upload-file-dropzone/create-post-dialog-media-upload-file-dropzone';

export const CreatePostDialogMediaUpload = () => (
	<CreatePostDialogMediaUploadFileDropzone>
		<CreatePostDialogMediaUploadContent />
	</CreatePostDialogMediaUploadFileDropzone>
);
