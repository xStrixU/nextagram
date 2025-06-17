import type { ReactNode } from 'react';

type PostActionsButtonProps = Readonly<{
	'aria-label': string;
	children: ReactNode;
}>;

export const PostActionsButton = ({
	'aria-label': ariaLabel,
	children,
}: PostActionsButtonProps) => (
	<button
		type="button"
		aria-label={ariaLabel}
		className="cursor-pointer text-2xl transition-opacity hover:opacity-50"
	>
		{children}
	</button>
);
