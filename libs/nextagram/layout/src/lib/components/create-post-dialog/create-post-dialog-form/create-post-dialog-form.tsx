'use client';

import { Form, FormField, FormItem } from '@nextagram/nextagram-shared-forms';
import { Button, Textarea } from '@nextagram/nextagram-shared-ui';

import { useCreatePostDialogForm } from './use-create-post-dialog-form';

type CreatePostDialogFormProps = Readonly<{
	onDialogClose: () => void;
}>;

export const CreatePostDialogForm = ({
	onDialogClose,
}: CreatePostDialogFormProps) => {
	const { form, isPending, handlePostCreate, t } = useCreatePostDialogForm({
		onDialogClose,
	});

	return (
		<Form {...form}>
			<form onSubmit={handlePostCreate} className="space-y-4">
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem label={t('description')}>
							<Textarea placeholder={t('description')} {...field} />
						</FormItem>
					)}
				/>
				<Button type="submit" isLoading={isPending} fullWidth>
					{t('submit')}
				</Button>
			</form>
		</Form>
	);
};
