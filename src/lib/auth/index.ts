import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      //   if (token) {
      //     session.user.id = token.id;
      //     session.user.name = token.name;
      //     session.user.email = token.email;
      //     session.user.image = token.picture;
      //     session.user.username = token.username;
      //   }

      return session;
    },
    redirect() {
      return "/";
    },
  },
};
export const getAuthSession = () => getServerSession(authOptions);
