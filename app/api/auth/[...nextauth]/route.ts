

import NextAuth from 'next-auth/next';
import { authOptions } from '@/ultis/auth';

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST, authOptions };