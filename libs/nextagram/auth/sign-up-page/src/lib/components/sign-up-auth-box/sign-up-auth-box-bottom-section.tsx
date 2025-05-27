import { Link as I18nLink } from '@nextagram/nextagram-shared-i18n';
import { getTranslations } from '@nextagram/nextagram-shared-i18n';
import { Link } from '@nextagram/nextagram-shared-ui';

export const SignUpAuthBoxBottomSection = async () => {
	const t = await getTranslations('auth.sign-up-page.auth-box');

	return (
		<p className="mx-auto text-center text-sm font-medium">
			{t.rich('bottomSection', {
				link: chunks => (
					<Link decoration="underline" asChild>
						<I18nLink href="/sign-in">{chunks}</I18nLink>
					</Link>
				),
			})}
		</p>
	);
};
