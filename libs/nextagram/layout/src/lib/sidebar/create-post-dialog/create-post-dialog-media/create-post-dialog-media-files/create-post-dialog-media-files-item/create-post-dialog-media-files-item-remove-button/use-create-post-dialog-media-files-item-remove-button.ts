import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { useCreatePostDialogStore } from '../../../../create-post-dialog.store';

import type { MouseEvent } from 'react';

export const useCreatePostDialogMediaFilesItemRemoveButton = ({
	index,
}: {
	index: number;
}) => {
	const removeFile = useCreatePostDialogStore(state => state.removeFile);
	const t = useTranslations(
		'layout.sidebar.create-post-dialog.media.files.item',
	);

	const handleFileRemove = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		removeFile(index);
	};

	return { handleFileRemove, t };
};
