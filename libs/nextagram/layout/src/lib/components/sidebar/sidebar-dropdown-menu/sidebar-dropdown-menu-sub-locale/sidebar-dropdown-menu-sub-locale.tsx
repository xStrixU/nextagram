'use client';

import { routing } from '@nextagram/nextagram-shared-i18n';
import {
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from '@nextagram/nextagram-shared-ui';
import { Language } from '@nextagram/nextagram-shared-ui/icons';

import { useSidebarDropdownMenuSubLocale } from './use-sidebar-dropdown-menu-sub-locale';

export const SidebarDropdownMenuSubLocale = () => {
	const { locale, handleLocaleChange, t } = useSidebarDropdownMenuSubLocale();

	return (
		<DropdownMenuSub>
			<DropdownMenuSubTrigger>
				<Language className="mr-2" />
				{t('trigger')}
			</DropdownMenuSubTrigger>
			<DropdownMenuPortal>
				<DropdownMenuSubContent>
					<DropdownMenuRadioGroup
						value={locale}
						onValueChange={handleLocaleChange}
					>
						{routing.locales.map(locale => (
							<DropdownMenuRadioItem key={locale} value={locale}>
								{t(`options.${locale}`)}
							</DropdownMenuRadioItem>
						))}
					</DropdownMenuRadioGroup>
				</DropdownMenuSubContent>
			</DropdownMenuPortal>
		</DropdownMenuSub>
	);
};
