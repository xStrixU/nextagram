import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from './lib/shared/auth/auth';

export const authNextJsHandler = toNextJsHandler(auth);

export { auth };
