import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

type FormItemRowProps = Readonly<{
	label: ReactNode;
	description?: string;
	i18n?: boolean;
	children: ReactNode;
}>;

export const FormItemRow = ({
	label,
	description,
	i18n,
	children,
}: FormItemRowProps) => (
	<FormItem>
		<div className="flex gap-3">
			<FormControl>{children}</FormControl>
			<FormLabel>
				<span>{label}</span>
			</FormLabel>
		</div>
		{description && <FormDescription>{description}</FormDescription>}
		<FormMessage i18n={i18n} />
	</FormItem>
);
