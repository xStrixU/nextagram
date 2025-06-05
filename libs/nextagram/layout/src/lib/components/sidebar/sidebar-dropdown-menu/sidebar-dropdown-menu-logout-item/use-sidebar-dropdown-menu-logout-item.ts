import { useRouter, useTranslations } from '@nextagram/nextagram-shared-i18n';
import { toast } from '@nextagram/nextagram-shared-ui';

import { useDeleteCurrentSession } from '../../../../api/use-delete-current-session';

export const useSidebarDropdownMenuLogoutItem = () => {
	const router = useRouter();
	const { deleteCurrentSession } = useDeleteCurrentSession();
	const t = useTranslations('layout.sidebar.dropdown-menu.logout');

	const handleLogout = async () => {
		await deleteCurrentSession();

		router.push('/sign-in');
		toast(t('success'));
	};

	return { handleLogout, t };
};
