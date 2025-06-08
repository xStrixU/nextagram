import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { SidebarNavigationList } from './sidebar-navigation-list/sidebar-navigation-list';

export const SidebarNavigation = async () => {
	const t = await getTranslations('layout.sidebar.a11y');

	return (
		<nav aria-label={t('nav')} className="w-full">
			<SidebarNavigationList />
		</nav>
	);
};
