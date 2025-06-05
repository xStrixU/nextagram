import { Slot } from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

const SidebarItemIcon = ({ children }: { readonly children: ReactNode }) => (
	<div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
		{children}
	</div>
);

const SidebarItemLabel = ({ children }: { readonly children: ReactNode }) => (
	<span className="hidden md:inline">{children}</span>
);

export const SidebarItem = ({ children }: { readonly children: ReactNode }) => (
	<Slot className="group flex size-12 cursor-pointer items-center justify-center gap-3 rounded transition-colors duration-300 sm:hover:bg-neutral-100 md:w-full md:justify-start md:px-3">
		{children}
	</Slot>
);

SidebarItem.Icon = SidebarItemIcon;
SidebarItem.Label = SidebarItemLabel;
