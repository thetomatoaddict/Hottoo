import { addUser } from '@/service/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';


export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  
  callbacks: {
    async signIn({user : {id, name, image, email}}){
      if (!email){
        return false;
      }
      addUser({
        id,
        name: name || "",
        image,
        email,
        username:
        email.split('@')[0]})
      return true
    },
    async session({ session }) {
      const user = session?.user
      if(user) {
        session.user={
        ...user,
        username: user.email?.split('@')[0] || '',
      }
      }

      
      return session
    }
  },
  pages: {
    signIn: '/auth/signin'},
  
});


export { handler as GET, handler as POST };