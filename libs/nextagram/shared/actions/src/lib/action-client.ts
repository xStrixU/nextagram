import { createSafeActionClient } from 'next-safe-action';

import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { UnauthenticatedError } from './errors/unauthenticated-error';

export const actionClient = createSafeActionClient({
	handleServerError: async error => {
		const t = await getTranslations('shared.errors');

		if (error instanceof UnauthenticatedError) {
			return t('unauthenticated');
		}

		return t('unexpected');
	},
});
