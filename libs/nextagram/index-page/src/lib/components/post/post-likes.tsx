import { getTranslations } from '@nextagram/nextagram-shared-i18n';

export const PostLikes = async () => {
	const t = await getTranslations('index-page.post');

	return <p className="text-sm font-semibold">{t('likes', { likes: 0 })}</p>;
};
