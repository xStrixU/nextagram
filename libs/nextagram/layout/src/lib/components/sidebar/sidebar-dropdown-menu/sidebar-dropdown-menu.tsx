import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@nextagram/nextagram-shared-ui';

import { SidebarDropdownMenuEditProfileItem } from './sidebar-dropdown-menu-edit-profile-item/sidebar-dropdown-menu-edit-profile-item';
import { SidebarDropdownMenuLogoutItem } from './sidebar-dropdown-menu-logout-item/sidebar-dropdown-menu-logout-item';
import { SidebarDropdownMenuSubLocale } from './sidebar-dropdown-menu-sub-locale/sidebar-dropdown-menu-sub-locale';
import { SidebarDropdownMenuTrigger } from './sidebar-dropdown-menu-trigger';

export const SidebarDropdownMenu = async () => {
	const t = await getTranslations('layout.sidebar.dropdown-menu');

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarDropdownMenuTrigger label={t('trigger')} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
					<SidebarDropdownMenuEditProfileItem />
					<SidebarDropdownMenuSubLocale />
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<SidebarDropdownMenuLogoutItem />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
