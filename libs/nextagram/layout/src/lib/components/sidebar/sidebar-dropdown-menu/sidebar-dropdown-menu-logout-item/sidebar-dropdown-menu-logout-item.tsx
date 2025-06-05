'use client';

import { DropdownMenuItem } from '@nextagram/nextagram-shared-ui';
import { Logout } from '@nextagram/nextagram-shared-ui/icons';

import { useSidebarDropdownMenuLogoutItem } from './use-sidebar-dropdown-menu-logout-item';

export const SidebarDropdownMenuLogoutItem = () => {
	const { handleLogout, t } = useSidebarDropdownMenuLogoutItem();

	return (
		<DropdownMenuItem onClick={handleLogout}>
			<Logout className="text-black" aria-hidden />
			{t('trigger')}
		</DropdownMenuItem>
	);
};
