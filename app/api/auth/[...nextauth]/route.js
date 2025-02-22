import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "@/module/firebase";
const db = getFirestore(app);

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
      const collectionRef = collection(db, "user");
      const data = {
        email: email,
        payment: false,
        QuantCourse: false,
        LRDI: false,
      };
      const res = await addDoc(collectionRef, data);
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Ensure redirect URL matches your domain
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      if (token.email) {
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
