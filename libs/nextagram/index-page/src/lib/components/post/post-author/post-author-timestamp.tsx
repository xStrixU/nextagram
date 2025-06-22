import { useLocale } from '@nextagram/nextagram-shared-i18n';
import {
	formatDistanceToNow,
	locales,
} from '@nextagram/nextagram-shared-utils-dates';

type PostAuthorTimestampProps = Readonly<{
	postCreatedAt: Date;
}>;

export const PostAuthorTimestamp = ({
	postCreatedAt,
}: PostAuthorTimestampProps) => {
	const locale = useLocale();

	return (
		<p className="text-sm font-semibold text-neutral-500">
			•{' '}
			{formatDistanceToNow(postCreatedAt, {
				locale: locales[locale],
				addSuffix: true,
			})}
		</p>
	);
};
