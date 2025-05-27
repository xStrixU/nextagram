import { SignUpAuthBox } from './components/sign-up-auth-box/sign-up-auth-box';
import { SignUpForm } from './components/sign-up-form/sign-up-form';
import { SignUpMessages } from './components/sign-up-messages';

export const SignUpPage = () => (
	<SignUpMessages>
		<SignUpAuthBox>
			<SignUpForm />
		</SignUpAuthBox>
	</SignUpMessages>
);
