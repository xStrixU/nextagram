import { ActiveLink } from '@nextagram/nextagram-shared-i18n/components';

import { SidebarItem } from '../sidebar-item';

import type { ReactNode } from 'react';

type SidebarNavigationItemProps = Readonly<{
	href: string;
	label: string;
	icon: ReactNode | ((isActive: boolean) => ReactNode);
}>;

export const SidebarNavigationItem = ({
	href,
	label,
	icon,
}: SidebarNavigationItemProps) => (
	<SidebarItem>
		<ActiveLink
			href={href}
			aria-label={label}
			activeClassName="font-bold"
			activeAttributes={{ 'aria-current': 'page' }}
		>
			{isActive => (
				<>
					<SidebarItem.Icon>
						{typeof icon === 'function' ? icon(isActive) : icon}
					</SidebarItem.Icon>
					<SidebarItem.Label>{label}</SidebarItem.Label>
				</>
			)}
		</ActiveLink>
	</SidebarItem>
);
