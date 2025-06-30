import { useTranslations } from '@nextagram/nextagram-shared-i18n';

type PostLikesProps = Readonly<{
	likes: number;
}>;

export const PostLikes = ({ likes }: PostLikesProps) => {
	const t = useTranslations('index-page.post');

	return <p className="text-sm font-semibold">{t('likes', { likes })}</p>;
};
