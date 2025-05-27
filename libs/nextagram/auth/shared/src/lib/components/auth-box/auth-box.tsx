import { AuthBoxContinueWith } from './auth-box-continue-with/auth-box-continue-with';
import { AuthBoxTitle } from './auth-box-title';

import type { ReactNode } from 'react';

type AuthBoxProps = Readonly<{
	title: string;
	children: ReactNode;
	bottomSection?: ReactNode;
}>;

export const AuthBox = ({ title, children, bottomSection }: AuthBoxProps) => (
	<div className="m-auto flex h-full w-full overflow-auto bg-white p-6 text-black shadow sm:h-fit sm:max-w-lg sm:rounded-lg">
		<div className="m-auto w-full space-y-6">
			<AuthBoxTitle content={title} />
			{children}
			<AuthBoxContinueWith />
			{bottomSection}
		</div>
	</div>
);
