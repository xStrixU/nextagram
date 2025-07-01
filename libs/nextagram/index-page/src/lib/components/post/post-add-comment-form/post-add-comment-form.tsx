'use client';

import { useTranslations } from 'next-intl';
import TextareaAutosize from 'react-textarea-autosize';

import { Loader } from '@nextagram/nextagram-shared-ui/icons';

import { usePostAddCommentForm } from './use-post-add-comment-form';

type PostAddCommentFormProps = Readonly<{
	postId: string;
}>;

export const PostAddCommentForm = ({ postId }: PostAddCommentFormProps) => {
	const { formRef, commentPost, isPending, handleCommentConfirm } =
		usePostAddCommentForm();
	const t = useTranslations('index-page.post.comment');

	return (
		<form ref={formRef} action={commentPost} className="flex gap-2.5 text-sm">
			<input type="hidden" name="postId" value={postId} />
			<TextareaAutosize
				name="content"
				placeholder={t('placeholder')}
				disabled={isPending}
				maxRows={6}
				onKeyDown={handleCommentConfirm}
				required
				className="peer w-full resize-none py-1 outline-none"
			/>
			<button
				type="submit"
				disabled={isPending}
				className="flex cursor-pointer items-center gap-1 font-semibold peer-placeholder-shown:hidden disabled:opacity-60"
			>
				{isPending && <Loader className="animate-spin" />}
				{t('submit')}
			</button>
		</form>
	);
};
