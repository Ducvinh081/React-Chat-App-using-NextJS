

import NextAuth from 'next-auth/next';
import { authOption } from '@/ultis/auth';

const handle = NextAuth(authOption);

export { handle as GET, handle as POST };