import { Link } from '@nextagram/nextagram-shared-i18n';
import { getTranslations } from '@nextagram/nextagram-shared-i18n';

import { SidebarLogoCompact } from './sidebar-logo-compact';
import { SidebarLogoFull } from './sidebar-logo-full';

export const SidebarLogo = async () => {
	const t = await getTranslations('layout.sidebar.a11y');

	return (
		<Link
			href="/"
			aria-label={t('logo')}
			className="hidden h-6 sm:inline-block"
		>
			<SidebarLogoFull />
			<SidebarLogoCompact />
		</Link>
	);
};
