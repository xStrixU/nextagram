import { SignInPage as SignInPageFeature } from '@nextagram/nextagram-auth-sign-in-page';
import { setRequestLocale } from '@nextagram/nextagram-shared-i18n';

import type { LocaleParams } from '@nextagram/nextagram-shared-i18n';

type SignInPageProps = Readonly<{
	params: LocaleParams;
}>;

const SignInPage = async ({ params }: SignInPageProps) => {
	const { locale } = await params;

	setRequestLocale(locale);

	return <SignInPageFeature />;
};

export default SignInPage;
