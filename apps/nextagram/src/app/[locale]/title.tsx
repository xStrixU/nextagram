import { headers } from 'next/headers';

import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { auth } from '@nextagram/nextagram-shared-server';

export const Title = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	const t = await getTranslations('IndexPage');

	return (
		<h1 className="text-4xl font-bold text-blue-500">
			{t('title', { username: session?.user.username ?? '' })}
		</h1>
	);
};
