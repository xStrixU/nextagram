import { useRef } from 'react';

import { useCommentPost } from '../../../api/client/use-comment-post';

import type { KeyboardEvent } from 'react';

export const usePostAddCommentForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const { commentPost, isPending } = useCommentPost();

	const handleCommentConfirm = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key !== 'Enter' || event.shiftKey || isPending) return;

		event.preventDefault();
		formRef.current?.requestSubmit();
	};

	return { formRef, commentPost, isPending, handleCommentConfirm };
};
