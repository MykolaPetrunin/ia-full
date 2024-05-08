import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      console.log(auth);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = !nextUrl.pathname.includes('auth');
      if (isOnDashboard) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
    },
  },
  secret: process.env.AUTH_SECRET,
});
