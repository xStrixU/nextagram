'use client';

import {
	Form,
	FormField,
	FormItem,
	FormItemRow,
} from '@nextagram/nextagram-shared-forms';
import { Link as I18nLink } from '@nextagram/nextagram-shared-i18n';
import { Button, Checkbox, Input, Link } from '@nextagram/nextagram-shared-ui';

import { useSignUpForm } from './use-sign-up-form';

export const SignUpForm = () => {
	const { form, isPending, t, onSubmit } = useSignUpForm();

	return (
		<Form {...form}>
			<form onSubmit={onSubmit} className="space-y-7">
				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem label={t('fullName')}>
							<Input placeholder={t('fullName')} {...field} />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem label={t('username')}>
							<Input
								autoComplete="username"
								placeholder={t('username')}
								{...field}
							/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem label={t('email')}>
							<Input autoComplete="email" placeholder={t('email')} {...field} />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem label={t('password')}>
							<Input
								type="password"
								autoComplete="new-password"
								placeholder={t('password')}
								{...field}
							/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem label={t('confirmPassword')}>
							<Input
								type="password"
								autoComplete="new-password"
								placeholder={t('confirmPassword')}
								{...field}
							/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="termsAndConditions"
					render={({ field }) => (
						<FormItemRow
							label={t.rich('termsAndConditions', {
								link: chunks => (
									<Link decoration="underline" color="inherit" asChild>
										<I18nLink href="#">{chunks}</I18nLink>
									</Link>
								),
							})}
						>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormItemRow>
					)}
				/>
				<Button type="submit" isLoading={isPending} fullWidth>
					{t('submit')}
				</Button>
			</form>
		</Form>
	);
};
