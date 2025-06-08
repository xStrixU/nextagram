import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { SidebarNavigationItem } from '../../sidebar-navigation-item';
import { SidebarNavigationListProfileItemAvatar } from './sidebar-navigation-list-profile-item-avatar/sidebar-navigation-list-profile-item-avatar';

export const SidebarNavigationListProfileItem = async () => {
	const t = await getTranslations('layout.sidebar.navigation');

	return (
		<li className="md:w-full">
			<SidebarNavigationItem
				href="/profile"
				label={t('profile')}
				icon={<SidebarNavigationListProfileItemAvatar />}
			/>
		</li>
	);
};
