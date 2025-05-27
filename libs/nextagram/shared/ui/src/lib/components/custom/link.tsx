import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const linkVariants = cva('text-sm font-semibold text-black', {
	variants: {
		decoration: {
			underline: 'underline',
		},
		color: {
			inherit: 'text-inherit',
		},
	},
});

type LinkProps = Readonly<{
	asChild?: boolean;
}> &
	ComponentProps<'a'> &
	VariantProps<typeof linkVariants>;

export const Link = ({
	decoration,
	color,
	asChild = false,
	...props
}: LinkProps) => {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			data-slot="link"
			className={linkVariants({ decoration, color })}
			{...props}
		/>
	);
};
