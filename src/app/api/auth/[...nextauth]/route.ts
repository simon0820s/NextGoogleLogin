import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

NextAuth({
  providers: [GoogleProvider({})],
});
