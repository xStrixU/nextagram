import { AuthBoxContinueWithSeparator } from './auth-box-continue-with-separator';
import { AuthBoxContinueWithSocials } from './auth-box-continue-with-socials';

export const AuthBoxContinueWith = () => (
	<div className="w-full space-y-4">
		<AuthBoxContinueWithSeparator />
		<AuthBoxContinueWithSocials />
	</div>
);
