import { Menu } from '@nextagram/nextagram-shared-ui/icons';

import { SidebarItem } from '../sidebar-item';

type SidebarDropdownMenuTriggerProps = Readonly<{
	label: string;
}>;

export const SidebarDropdownMenuTrigger = ({
	label,
}: SidebarDropdownMenuTriggerProps) => (
	<SidebarItem>
		<button type="button" className="mt-auto">
			<SidebarItem.Icon>
				<Menu className="size-6.5" aria-hidden />
			</SidebarItem.Icon>
			<SidebarItem.Label>{label}</SidebarItem.Label>
		</button>
	</SidebarItem>
);
