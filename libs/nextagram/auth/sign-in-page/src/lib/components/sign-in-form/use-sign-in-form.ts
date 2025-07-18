import { useZodForm } from '@nextagram/nextagram-shared-forms';
import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { useRouter } from '@nextagram/nextagram-shared-i18n';
import { isAuthError } from '@nextagram/nextagram-shared-server/auth/client';
import { useCreateSession } from '@nextagram/nextagram-shared-session';
import { toast } from '@nextagram/nextagram-shared-ui';

import { signInFormSchema } from './sign-in-form.schema';

export const useSignInForm = () => {
	const router = useRouter();
	const form = useZodForm(signInFormSchema, {
		defaultValues: {
			login: '',
			password: '',
			rememberMe: false,
		},
	});
	const { createSession, isPending } = useCreateSession();
	const t = useTranslations('auth.sign-in-page.form');
	const tShared = useTranslations('shared');

	const handleSessionCreate = form.handleSubmit(
		async ({ login, password, rememberMe }) => {
			try {
				await createSession({ login, password, rememberMe });

				toast(t('success'));
				router.push('/');
			} catch (error) {
				if (isAuthError(error)) {
					switch (error.code) {
						case 'INVALID_EMAIL_OR_PASSWORD':
						case 'INVALID_USERNAME_OR_PASSWORD': {
							const message =
								'auth.sign-in-page.form.errors.invalidCredentials';

							form.setError('login', { message });
							form.setError('password', { message });
							break;
						}
						case 'EMAIL_NOT_VERIFIED': {
							toast.error(t('errors.verifyEmail'));
						}
					}

					return;
				}

				toast.error(tShared('errors.unexpected'));
			}
		},
	);

	return { form, isPending, t, handleSessionCreate };
};
