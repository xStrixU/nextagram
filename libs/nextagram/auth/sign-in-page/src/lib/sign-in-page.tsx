import { SignInAuthBox } from './components/sign-in-auth-box/sign-in-auth-box';
import { SignInForm } from './components/sign-in-form/sign-in-form';
import { SignInMessages } from './components/sign-in-messages';

export const SignInPage = () => (
	<SignInMessages>
		<SignInAuthBox>
			<SignInForm />
		</SignInAuthBox>
	</SignInMessages>
);
