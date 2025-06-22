import { LayoutMessages, Sidebar } from '@nextagram/nextagram-layout';
import { setRequestLocale } from '@nextagram/nextagram-shared-i18n';

import type { ReactNode } from 'react';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

type MainLayoutProps = Readonly<{
	params: LocaleParams;
	children: ReactNode;
}>;

const MainLayout = async ({ params, children }: MainLayoutProps) => {
	const { locale } = await params;

	setRequestLocale(locale);

	return (
		<LayoutMessages>
			<Sidebar />
			<main className="sm:pl-sidebar-collapsed md:pl-sidebar h-full grow pb-12 sm:pb-0">
				{children}
			</main>
		</LayoutMessages>
	);
};

export default MainLayout;
