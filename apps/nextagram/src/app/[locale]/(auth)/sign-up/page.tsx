import { SignUpPage as SignUpPageFeature } from '@nextagram/nextagram-auth-sign-up-page';
import { setRequestLocale } from '@nextagram/nextagram-shared-i18n';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

type SignUpPageProps = Readonly<{
	params: LocaleParams;
}>;

const SignUpPage = async ({ params }: SignUpPageProps) => {
	const { locale } = await params;

	setRequestLocale(locale);

	return <SignUpPageFeature />;
};

export default SignUpPage;
