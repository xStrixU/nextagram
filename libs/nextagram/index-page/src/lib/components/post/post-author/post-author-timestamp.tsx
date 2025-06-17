import { getLocale } from '@nextagram/nextagram-shared-i18n';
import {
	formatDistanceToNow,
	locales,
} from '@nextagram/nextagram-shared-utils-dates';

type PostAuthorTimestampProps = Readonly<{
	postCreatedAt: Date;
}>;

export const PostAuthorTimestamp = async ({
	postCreatedAt,
}: PostAuthorTimestampProps) => {
	const locale = await getLocale();

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
