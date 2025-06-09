import { Suspense } from 'react';

import { Avatar, AvatarFallback } from '@nextagram/nextagram-shared-ui';

import { SidebarNavigationListProfileItemAvatarInner } from './sidebar-navigation-list-profile-item-avatar-inner';

export const SidebarNavigationListProfileItemAvatar = () => (
	<Suspense
		fallback={
			<Avatar>
				<AvatarFallback />
			</Avatar>
		}
	>
		<SidebarNavigationListProfileItemAvatarInner />
	</Suspense>
);
