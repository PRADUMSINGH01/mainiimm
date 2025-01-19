import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Optional: Add custom logic for sign-in here
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirect URL matches your domain
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      // Attach additional info to session if needed
      return session;
    },
    async jwt({ token, user }) {
      // Customize token handling if needed
      return token;
    },
  },
});

export { handler as GET, handler as POST };
