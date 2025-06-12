import type { ReactNode } from 'react';

type EditProfileDialogSectionProps = Readonly<{
	title: string;
	children: ReactNode;
}>;

export const EditProfileDialogSection = ({
	title,
	children,
}: EditProfileDialogSectionProps) => (
	<section>
		<h3 className="mb-4 border-separate border-b text-lg font-medium">
			{title}
		</h3>
		{children}
	</section>
);
