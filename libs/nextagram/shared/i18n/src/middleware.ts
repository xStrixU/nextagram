import createMiddleware from 'next-intl/middleware';

import { routing } from './lib/routing';

export default createMiddleware(routing);
