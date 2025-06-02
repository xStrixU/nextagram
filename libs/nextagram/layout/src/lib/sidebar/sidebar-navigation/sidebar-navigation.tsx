'use client';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { SidebarNavigationList } from './sidebar-navigation-list/sidebar-navigation-list';

export const SidebarNavigation = () => {
	const t = useTranslations('layout.sidebar.a11y');

	return (
		<nav aria-label={t('nav')} className="w-full">
			<SidebarNavigationList />
		</nav>
	);
};
