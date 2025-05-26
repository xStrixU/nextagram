import {
	getTranslations,
	setRequestLocale,
} from '@nextagram/nextagram-shared-i18n';
import { Button, Input } from '@nextagram/nextagram-shared-ui';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

type IndexPageProps = Readonly<{
	params: LocaleParams;
}>;

const IndexPage = async ({ params }: IndexPageProps) => {
	const { locale } = await params;

	setRequestLocale(locale);

	const t = await getTranslations('IndexPage');

	return (
		<main className="flex h-screen flex-col items-center justify-center gap-6">
			<h1 className="text-4xl font-bold text-blue-500">{t('title')}</h1>
			<Button>Lorem Ipsum</Button>
			<Input placeholder="Lorem ipsum" className="max-w-xl" />
		</main>
	);
};

export default IndexPage;
