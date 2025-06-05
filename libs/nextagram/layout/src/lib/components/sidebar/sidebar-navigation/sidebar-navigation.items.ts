import {
	BelFill,
	Bell,
	Home,
	HomeFill,
	Mail,
	Search,
} from '@nextagram/nextagram-shared-ui/icons';

import type { Icon } from '@nextagram/nextagram-shared-ui/icons';

interface NavItem {
	icon: Icon;
	activeIcon?: Icon;
	label: string;
	href: string;
}

export const navItems = [
	{
		icon: Home,
		activeIcon: HomeFill,
		label: 'index' as const,
		href: '/',
	},
	{
		icon: Search,
		label: 'search' as const,
		href: '/search',
	},
	{
		icon: Mail,
		label: 'messages' as const,
		href: '/messages',
	},
	{
		icon: Bell,
		activeIcon: BelFill,
		label: 'notifications' as const,
		href: '/notifications',
	},
] satisfies NavItem[];
