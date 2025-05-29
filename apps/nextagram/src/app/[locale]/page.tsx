import { Suspense } from 'react';

import { setRequestLocale } from '@nextagram/nextagram-shared-i18n';

import { Title } from './title';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

type IndexPageProps = Readonly<{
	params: LocaleParams;
}>;

const IndexPage = async ({ params }: IndexPageProps) => {
	const { locale } = await params;

	setRequestLocale(locale);

	return (
		<main className="flex h-screen flex-col items-center justify-center gap-6">
			<Suspense fallback={<p>...</p>}>
				<Title />
			</Suspense>
		</main>
	);
};

export default IndexPage;
