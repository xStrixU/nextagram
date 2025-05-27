import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from '@nextagram/nextagram-shared-ui';

import type { ReactNode } from 'react';

type RowFormItemWrapperProps = Readonly<{
	label: ReactNode;
	description?: string;
	i18n?: boolean;
	children: ReactNode;
}>;

export const RowFormItemWrapper = ({
	label,
	description,
	i18n,
	children,
}: RowFormItemWrapperProps) => (
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
