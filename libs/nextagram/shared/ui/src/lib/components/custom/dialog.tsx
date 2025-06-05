import {
	Dialog as ShadcnDialog,
	DialogContent as ShadcnDialogContent,
	DialogHeader as ShadcnDialogHeader,
	DialogTitle as ShadcnDialogTitle,
	DialogTrigger as ShadcnDialogTrigger,
} from '../shadcn/dialog';

import type { ComponentProps, ReactNode } from 'react';

type DialogProps = Readonly<{
	title: string;
	trigger: ReactNode;
}> &
	ComponentProps<typeof ShadcnDialog>;

export const Dialog = ({ title, trigger, children, ...props }: DialogProps) => (
	<ShadcnDialog {...props}>
		<ShadcnDialogTrigger asChild>{trigger}</ShadcnDialogTrigger>
		<ShadcnDialogContent className="max-h-full space-y-4 overflow-auto">
			<ShadcnDialogHeader>
				<ShadcnDialogTitle>{title}</ShadcnDialogTitle>
			</ShadcnDialogHeader>
			{children}
		</ShadcnDialogContent>
	</ShadcnDialog>
);
