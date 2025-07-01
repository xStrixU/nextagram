import { authClient } from '@nextagram/nextagram-shared-server/auth/client';

type SocialProvider = 'facebook' | 'google';

export const signInWithSocial = (provider: SocialProvider) =>
	authClient.signIn.social({ provider });
