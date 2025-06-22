import { SidebarCreateButton } from './sidebar-create-button';
import { SidebarDropdownMenu } from './sidebar-dropdown-menu/sidebar-dropdown-menu';
import { SidebarLogo } from './sidebar-logo/sidebar-logo';
import { SidebarNavigation } from './sidebar-navigation/sidebar-navigation';

export const Sidebar = () => (
	<header className="border-separator sm:w-sidebar-collapsed md:w-sidebar fixed bottom-0 z-1 flex w-full items-center border-t bg-white sm:top-0 sm:flex-col sm:gap-10 sm:border-r sm:border-b-0 sm:py-6 md:items-start md:px-3">
		<SidebarLogo />
		<SidebarNavigation />
		<div className="hidden sm:block md:w-full">
			<SidebarCreateButton />
		</div>
		<SidebarDropdownMenu />
	</header>
);
