'use client';

import {
	Form,
	FormField,
	FormItemWrapper,
	RowFormItemWrapper,
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
						<FormItemWrapper label={t('fullName')}>
							<Input placeholder={t('fullName')} {...field} />
						</FormItemWrapper>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItemWrapper label={t('username')}>
							<Input
								autoComplete="username"
								placeholder={t('username')}
								{...field}
							/>
						</FormItemWrapper>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItemWrapper label={t('email')}>
							<Input autoComplete="email" placeholder={t('email')} {...field} />
						</FormItemWrapper>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItemWrapper label={t('password')}>
							<Input
								type="password"
								autoComplete="new-password"
								placeholder={t('password')}
								{...field}
							/>
						</FormItemWrapper>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItemWrapper label={t('confirmPassword')}>
							<Input
								type="password"
								autoComplete="new-password"
								placeholder={t('confirmPassword')}
								{...field}
							/>
						</FormItemWrapper>
					)}
				/>
				<FormField
					control={form.control}
					name="termsAndConditions"
					render={({ field }) => (
						<RowFormItemWrapper
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
						</RowFormItemWrapper>
					)}
				/>
				<Button type="submit" isLoading={isPending} fullWidth>
					{t('submit')}
				</Button>
			</form>
		</Form>
	);
};
