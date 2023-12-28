

import NextAuth from 'next-auth';
import { authOptions } from '@/auth';

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };