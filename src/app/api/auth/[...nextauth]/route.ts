import { api } from "@/lib/axios";
import NextAuth from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      async profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          username: profile.given_name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await api.post("/api/users", {
        name: user.name,
        username: user.username,
        image: user.image,
        email: user.email,
      });
      return true;
    },
    async session({ session, user }) {
      if (session.user) {
        return {
          ...session,
          user,
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
