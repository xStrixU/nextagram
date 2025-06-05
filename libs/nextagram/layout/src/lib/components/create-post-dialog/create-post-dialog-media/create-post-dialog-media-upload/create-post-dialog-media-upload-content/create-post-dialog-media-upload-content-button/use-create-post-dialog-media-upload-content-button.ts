import { useRef } from 'react';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { useCreatePostDialogStore } from '../../../../create-post-dialog.store';

import type { ChangeEvent } from 'react';

export const useCreatePostDialogMediaUploadContentButton = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const setFiles = useCreatePostDialogStore(state => state.setFiles);
	const t = useTranslations('layout.sidebar.create-post-dialog.media.upload');

	const handleFileUpload = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (!target.files) {
			return;
		}

		const files = [...target.files];

		if (files.length === 0) {
			return;
		}

		setFiles(files);
	};

	return { inputRef, handleFileUpload, t };
};
