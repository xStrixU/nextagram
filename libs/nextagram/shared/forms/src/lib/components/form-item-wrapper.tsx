import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

type FormItemWrapperProps = Readonly<{
	label: ReactNode;
	description?: string;
	i18n?: boolean;
	children: ReactNode;
}>;

export const FormItemWrapper = ({
	label,
	description,
	i18n,
	children,
}: FormItemWrapperProps) => (
	<FormItem>
		<FormLabel>{label}</FormLabel>
		<FormControl>{children}</FormControl>
		{description && <FormDescription>{description}</FormDescription>}
		<FormMessage i18n={i18n} />
	</FormItem>
);
