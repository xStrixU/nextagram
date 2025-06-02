'use client';

import { cn } from '@nextagram/nextagram-shared-utils-styling';

import { usePathname } from '../navigation';
import { Link } from '../navigation';

import type { AnchorHTMLAttributes, ComponentProps, ReactNode } from 'react';

type ActiveLinkProps = Readonly<{
	activeClassName: string;
	exact?: boolean;
	activeAttributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
	children: ReactNode | ((isActive: boolean) => ReactNode);
}> &
	Omit<ComponentProps<typeof Link>, 'children'>;

export const ActiveLink = ({
	activeClassName,
	exact,
	activeAttributes,
	href,
	className,
	children,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href.toString()
		: pathname.startsWith(href.toString());

	return (
		<Link
			href={href}
			className={cn(isActive && activeClassName, className)}
			{...(isActive && activeAttributes)}
			{...props}
		>
			{typeof children === 'function' ? children(isActive) : children}
		</Link>
	);
};
