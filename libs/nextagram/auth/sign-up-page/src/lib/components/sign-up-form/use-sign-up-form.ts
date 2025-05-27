import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { signUpFormSchema } from './sign-up-form.schema';

export const useSignUpForm = () => {
	const form = useZodForm(signUpFormSchema, {
		defaultValues: {
			fullName: '',
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			termsAndConditions: false,
		},
	});
	const t = useTranslations('auth.sign-up-page.form');

	const onSubmit = form.handleSubmit(data => {
		console.log({ data });
	});

	return { form, t, onSubmit };
};
