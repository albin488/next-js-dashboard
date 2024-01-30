import NextAuth from "next-auth/next";
import connectMongoDB from "@/libs/mongodb";
import Regi from "@/models/register";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await Regi.findOne({ email });

          if (!user) {
            console.log("erreur email");
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            console.log("erreur password");
            return null;
          } else {
            // Any object returned will be saved in `user` property of the JWT

            return user;
          }
        } catch (error) {}
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
