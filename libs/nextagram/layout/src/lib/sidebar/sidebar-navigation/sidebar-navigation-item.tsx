import { ActiveLink } from '@nextagram/nextagram-shared-i18n/components';

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
	<ActiveLink
		href={href}
		aria-label={label}
		className="group flex size-12 items-center justify-center gap-3 rounded transition-colors duration-300 sm:hover:bg-neutral-100 md:w-full md:justify-start md:px-3"
		activeClassName="font-bold"
		activeAttributes={{ 'aria-current': 'page' }}
	>
		{isActive => (
			<>
				<div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
					{typeof icon === 'function' ? icon(isActive) : icon}
				</div>
				<span className="hidden md:inline">{label}</span>
			</>
		)}
	</ActiveLink>
);
