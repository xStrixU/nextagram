import type { ReactNode } from 'react';

const AuthLayout = ({ children }: { readonly children: ReactNode }) => (
	<main className="flex h-full overflow-auto bg-gray-50 sm:p-4">
		{children}
	</main>
);

export default AuthLayout;
