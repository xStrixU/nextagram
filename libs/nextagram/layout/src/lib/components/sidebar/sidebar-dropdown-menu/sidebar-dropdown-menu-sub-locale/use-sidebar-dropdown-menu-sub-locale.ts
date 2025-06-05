import { useParams } from 'next/navigation';
import { useTransition } from 'react';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import {
	useLocale,
	usePathname,
	useRouter,
} from '@nextagram/nextagram-shared-i18n';

import type { Locale } from '@nextagram/nextagram-shared-i18n';

export const useSidebarDropdownMenuSubLocale = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const locale = useLocale();
	const [, startTransition] = useTransition();
	const t = useTranslations('layout.sidebar.dropdown-menu.selectLanguage');

	const handleLocaleChange = (locale: string) => {
		const nextLocale = locale as Locale;

		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	};

	return { locale, handleLocaleChange, t };
};
