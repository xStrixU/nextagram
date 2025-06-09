import { SidebarNavigationListItems } from './sidebar-navigation-list-items';
import { SidebarNavigationListProfileItem } from './sidebar-navigation-list-profile-item/sidebar-navigation-list-profile-item';

export const SidebarNavigationList = () => (
	<ul className="flex justify-evenly sm:flex-col sm:items-center sm:gap-2 md:items-start">
		<SidebarNavigationListItems />
		<SidebarNavigationListProfileItem />
	</ul>
);
