import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from './lib/shared/auth/auth';

export const authNextJsHandler = toNextJsHandler(auth);

export { auth };

export { postsService } from './lib/posts';
export { usersService } from './lib/users';

export type { Post, PostDto } from './lib/posts';
export type { UserDto } from './lib/users';
