import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { useRouter } from '@nextagram/nextagram-shared-i18n';
import { isAuthError } from '@nextagram/nextagram-shared-server/auth/client';
import { toast } from '@nextagram/nextagram-shared-ui';

import { useCreateUser } from '../../api/client/use-create-user';
import { signUpFormSchema } from './sign-up-form.schema';

export const useSignUpForm = () => {
	const router = useRouter();
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
	const { createUser, isPending } = useCreateUser();
	const t = useTranslations('auth.sign-up-page.form');
	const tShared = useTranslations('shared');

	const handleUserCreate = form.handleSubmit(
		async ({ username, email, password, fullName }) => {
			try {
				await createUser({
					username,
					email,
					password,
					name: fullName,
				});

				toast(t('success'));
				router.push('/sign-in');
			} catch (error) {
				if (isAuthError(error)) {
					switch (error.code) {
						case 'USERNAME_IS_ALREADY_TAKEN_PLEASE_TRY_ANOTHER': {
							const message = 'auth.sign-up-page.form.errors.usernameTaken';

							form.setError('username', { message });
							break;
						}
						case 'USER_ALREADY_EXISTS': {
							const message = 'auth.sign-up-page.form.errors.emailTaken';

							form.setError('email', { message });
							break;
						}
					}
					return;
				}

				toast.error(tShared('errors.unexpected'));
			}
		},
	);

	return { form, isPending, t, handleUserCreate };
};
