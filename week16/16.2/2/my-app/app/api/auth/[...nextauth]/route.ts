import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        Email: { label: "Username", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        const username = credentials.username;
        const password = credentials.password;

        // const user = await prisma.user.findOne({
        //   where: {
        //     email: username,
        //     password: password,
        //   },
        // });

        // Add Validation + DB Logic
        return {
          id: "1",
          email: "harshiltomar20@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
// export const GET = function () {};
// export const POST = function () {};
