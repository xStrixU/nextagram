import {
	FormControl,
	FormDescription,
	FormLabel,
	FormMessage,
	FormItem as ShadcnFormItem,
} from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

type FormItemProps = Readonly<{
	label: ReactNode;
	description?: string;
	i18n?: boolean;
	children: ReactNode;
}>;

export const FormItem = ({
	label,
	description,
	i18n,
	children,
}: FormItemProps) => (
	<ShadcnFormItem>
		<FormLabel>{label}</FormLabel>
		<FormControl>{children}</FormControl>
		{description && <FormDescription>{description}</FormDescription>}
		<FormMessage i18n={i18n} />
	</ShadcnFormItem>
);
