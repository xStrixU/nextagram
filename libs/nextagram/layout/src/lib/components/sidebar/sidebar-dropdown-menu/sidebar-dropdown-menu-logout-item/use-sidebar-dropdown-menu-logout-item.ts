import { useRouter, useTranslations } from '@nextagram/nextagram-shared-i18n';
import { useDeleteCurrentSession } from '@nextagram/nextagram-shared-session';
import { toast } from '@nextagram/nextagram-shared-ui';

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
