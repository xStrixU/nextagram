import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from './lib/shared/auth/auth';

export const authNextJsHandler = toNextJsHandler(auth);

export { auth };

export * as usersService from './lib/users/users.service';

export type { UserDto } from './lib/users/users.types';
