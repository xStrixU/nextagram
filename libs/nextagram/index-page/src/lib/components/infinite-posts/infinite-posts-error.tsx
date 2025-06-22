import { useTranslations } from '@nextagram/nextagram-shared-i18n';

export const InfinitePostsError = () => {
	const t = useTranslations('shared.errors');

	return <p>{t('unexpected')}</p>;
};
