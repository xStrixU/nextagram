import { Fragment } from 'react/jsx-runtime';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';

import { SidebarCreateButton } from '../../sidebar-create-button';
import { SidebarNavigationItem } from '../sidebar-navigation-item';
import { navItems } from '../sidebar-navigation.items';

export const SidebarNavigationListItems = () => {
	const t = useTranslations('layout.sidebar.navigation');

	return (
		<>
			{navItems.map(
				({ icon: Icon, activeIcon: ActiveIcon, label, href }, i) => (
					<Fragment key={href}>
						<li className="md:w-full">
							<SidebarNavigationItem
								href={href}
								label={t(label)}
								icon={isActive =>
									isActive && ActiveIcon ? (
										<ActiveIcon className="size-6.5" />
									) : (
										<Icon className="size-6.5" />
									)
								}
							/>
						</li>
						{i === 2 && (
							<li className="flex items-center sm:hidden">
								<SidebarCreateButton />
							</li>
						)}
					</Fragment>
				),
			)}
			<li className="md:w-full">
				<SidebarNavigationItem
					href="/profile"
					label={t('profile')}
					icon={<div className="size-6.5 rounded-full bg-neutral-500" />}
				/>
			</li>
		</>
	);
};
