import type { AppConfig } from 'next-intl';

import type messages from '../../messages/en.json';
import type { formats } from './request';
import type { routing } from './routing';

declare module 'next-intl' {
	interface AppConfig {
		Locale: (typeof routing.locales)[number];
		Messages: typeof messages;
		Formats: typeof formats;
	}
}

export type LocaleParams<T extends string = never> = Promise<
	{
		readonly locale: AppConfig['Locale'];
	} & {
		readonly [K in T]: string;
	}
>;
