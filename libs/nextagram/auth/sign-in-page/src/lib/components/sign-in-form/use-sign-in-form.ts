import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { signInFormSchema } from './sign-in-form.schema';

export const useSignInForm = () => {
	const form = useZodForm(signInFormSchema, {
		defaultValues: {
			login: '',
			password: '',
			rememberMe: false,
		},
	});
	const t = useTranslations('auth.sign-in-page.form');

	const onSubmit = form.handleSubmit(data => {
		console.log({ data });
	});

	return { form, t, onSubmit };
};
