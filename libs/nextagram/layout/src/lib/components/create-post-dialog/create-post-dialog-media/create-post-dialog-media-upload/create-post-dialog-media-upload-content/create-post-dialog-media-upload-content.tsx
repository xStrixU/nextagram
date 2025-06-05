import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { Images } from '@nextagram/nextagram-shared-ui/icons';

import { CreatePostDialogMediaUploadContentButton } from './create-post-dialog-media-upload-content-button/create-post-dialog-media-upload-content-button';

export const CreatePostDialogMediaUploadContent = () => {
	const t = useTranslations('layout.sidebar.create-post-dialog.media.upload');

	return (
		<div className="flex size-64 flex-col items-center justify-center gap-2.5">
			<Images aria-hidden className="size-20" />
			<p>{t('description')}</p>
			<CreatePostDialogMediaUploadContentButton />
		</div>
	);
};
