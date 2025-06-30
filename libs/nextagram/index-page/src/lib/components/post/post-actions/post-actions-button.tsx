import type { ReactNode } from 'react';

type PostActionsButtonProps = Readonly<{
	'aria-label': string;
	type?: 'button' | 'submit';
	children: ReactNode;
}>;

export const PostActionsButton = ({
	'aria-label': ariaLabel,
	type = 'button',
	children,
}: PostActionsButtonProps) => (
	<button
		type={type}
		aria-label={ariaLabel}
		className="cursor-pointer text-2xl transition-opacity hover:opacity-50"
	>
		{children}
	</button>
);
