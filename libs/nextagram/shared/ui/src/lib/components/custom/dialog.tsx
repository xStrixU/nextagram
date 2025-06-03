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

export const Dialog = ({ title, trigger, children }: DialogProps) => (
	<ShadcnDialog>
		<ShadcnDialogTrigger asChild>{trigger}</ShadcnDialogTrigger>
		<ShadcnDialogContent className="space-y-4">
			<ShadcnDialogHeader>
				<ShadcnDialogTitle>{title}</ShadcnDialogTitle>
			</ShadcnDialogHeader>
			{children}
		</ShadcnDialogContent>
	</ShadcnDialog>
);
