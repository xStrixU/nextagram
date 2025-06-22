import { useTranslations } from '@nextagram/nextagram-shared-i18n';

export const PostLikes = () => {
	const t = useTranslations('index-page.post');

	return <p className="text-sm font-semibold">{t('likes', { likes: 0 })}</p>;
};
