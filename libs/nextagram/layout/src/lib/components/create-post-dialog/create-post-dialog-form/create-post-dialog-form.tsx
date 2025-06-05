'use client';

import { Form, FormField, FormItem } from '@nextagram/nextagram-shared-forms';
import { Button, Textarea } from '@nextagram/nextagram-shared-ui';

import { useCreatePostDialogForm } from './use-create-post-dialog-form';

export const CreatePostDialogForm = () => {
	const { form, handlePostCreate, t } = useCreatePostDialogForm();

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
				<Button type="submit" fullWidth>
					{t('submit')}
				</Button>
			</form>
		</Form>
	);
};
