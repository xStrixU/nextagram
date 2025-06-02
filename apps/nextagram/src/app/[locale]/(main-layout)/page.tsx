import { IndexPage as IndexPageFeature } from '@nextagram/nextagram-index-page';
import { setRequestLocale } from '@nextagram/nextagram-shared-i18n';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

type IndexPageProps = Readonly<{
	params: LocaleParams;
}>;

const IndexPage = async ({ params }: IndexPageProps) => {
	const { locale } = await params;

	setRequestLocale(locale);

	return <IndexPageFeature />;
};

export default IndexPage;
