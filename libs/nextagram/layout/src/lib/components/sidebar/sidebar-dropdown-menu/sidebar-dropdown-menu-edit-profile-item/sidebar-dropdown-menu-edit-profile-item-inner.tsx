'use client';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import { DropdownMenuItem } from '@nextagram/nextagram-shared-ui';
import { SettingsOutline } from '@nextagram/nextagram-shared-ui/icons';

import type { MouseEvent, MouseEventHandler } from 'react';

type SidebarDropdownMenuEditProfileItemInnerProps = Readonly<{
	onClick?: MouseEventHandler<HTMLDivElement>;
}>;

export const SidebarDropdownMenuEditProfileItemInner = ({
	onClick,
	...props
}: SidebarDropdownMenuEditProfileItemInnerProps) => {
	const t = useTranslations('layout.sidebar.dropdown-menu');

	const handleItemClick = (event: MouseEvent<HTMLDivElement>) => {
		onClick?.(event);
		event.preventDefault();
	};

	return (
		<DropdownMenuItem onClick={handleItemClick} {...props}>
			<SettingsOutline className="text-black" aria-hidden />
			{t('editProfile')}
		</DropdownMenuItem>
	);
};
