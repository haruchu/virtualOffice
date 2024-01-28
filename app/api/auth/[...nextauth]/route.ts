import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth({
  ...authOptions,
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
