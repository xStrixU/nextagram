import { Inter } from 'next/font/google';

import {
	hasLocale,
	routing,
	setRequestLocale,
} from '@nextagram/nextagram-shared-i18n';
import { Toaster } from '@nextagram/nextagram-shared-ui';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

import '@/assets/styles/globals.css';

import { notFound } from 'next/navigation';

import { AppProviders } from '@/providers/app-providers';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nextagram',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const generateStaticParams = () =>
	routing.locales.map(locale => ({ locale }));

type RootLayoutProps = Readonly<{
	params: LocaleParams;
	children: ReactNode;
}>;

const RootLayout = async ({ params, children }: RootLayoutProps) => {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} className={inter.variable}>
			<body className="antialiased">
				<AppProviders>
					{children}
					<Toaster />
				</AppProviders>
			</body>
		</html>
	);
};

export default RootLayout;
