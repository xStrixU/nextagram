'use client';

import {
	Form,
	FormField,
	FormItemWrapper,
	RowFormItemWrapper,
} from '@nextagram/nextagram-shared-forms';
import { Link as I18nLink } from '@nextagram/nextagram-shared-i18n';
import { Button, Checkbox, Input, Link } from '@nextagram/nextagram-shared-ui';

import { useSignInForm } from './use-sign-in-form';

export const SignInForm = () => {
	const { form, isPending, t, onSubmit } = useSignInForm();

	return (
		<Form {...form}>
			<form onSubmit={onSubmit} className="space-y-7">
				<FormField
					control={form.control}
					name="login"
					render={({ field }) => (
						<FormItemWrapper label={t('login')}>
							<Input
								autoComplete="username"
								placeholder={t('login')}
								{...field}
							/>
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
								autoComplete="current-password"
								placeholder={t('password')}
								{...field}
							/>
						</FormItemWrapper>
					)}
				/>
				<div className="flex items-center justify-between">
					<FormField
						control={form.control}
						name="rememberMe"
						render={({ field }) => (
							<RowFormItemWrapper label={t('rememberMe')}>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</RowFormItemWrapper>
						)}
					/>
					<Link asChild>
						<I18nLink href="#">{t('forgotPassword')}</I18nLink>
					</Link>
				</div>
				<Button type="submit" isLoading={isPending} fullWidth>
					{t('submit')}
				</Button>
			</form>
		</Form>
	);
};
