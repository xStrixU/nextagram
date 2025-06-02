import { SidebarCreateButton } from './sidebar-create-button';
import { SidebarLogo } from './sidebar-logo/sidebar-logo';
import { SidebarNavigation } from './sidebar-navigation/sidebar-navigation';

export const Sidebar = () => (
	<header className="border-separator sm:w-sidebar-collapsed md:w-sidebar fixed bottom-0 flex w-full items-center border-t sm:top-0 sm:flex-col sm:gap-10 sm:border-r sm:border-b-0 sm:py-6 md:items-start md:px-3">
		<SidebarLogo />
		<SidebarNavigation />
		<div className="hidden sm:block md:w-full">
			<SidebarCreateButton />
		</div>
	</header>
);
