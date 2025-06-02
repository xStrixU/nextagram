import { getTranslations } from '@nextagram/nextagram-shared-i18n';

export const IndexPage = async () => {
	const t = await getTranslations('IndexPage');

	return <h1 className="text-4xl font-bold">{t('title')}</h1>;
};
