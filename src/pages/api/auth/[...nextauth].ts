import NextAuth,{ NextAuthOptions }  from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from '../../../../connection/conn'
import Users from '../../../../model/Schema'
import { compare } from 'bcryptjs';
//import { MongoDBAdapter } from "next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"

export const authOptions: NextAuthOptions = {
 // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_ID,
      clientSecret:process.env.GOOGLE_SECRET,
    
    }),
   
    CredentialsProvider({
      name : "Credentials",
       credentials: {
         username: { label: "Username", type: "text" },
         password: { label: "Password", type: "password" },
       },
      async authorize(credentials, req){
          connectMongo().catch(error => { error: "Connection Failed...!"})
          
          // check user existance
          const result = await Users.findOne( { username :credentials.username})
          console.log(result)
          if(!result){
              throw new Error("No user Found with Email Please Sign Up...!")
          }

          // compare()
          const checkPassword = await compare(credentials.password, result.password);
          console.log(checkPassword)
          // incorrect password
          if(!checkPassword || result.username !== credentials.username){
              throw new Error("Username or Password doesn't match");
          }

          return result;

      }
      }),
    ],
  //    session: {
  //      jwt: true,
  // },
    //   encode: async ({ secret, token, maxAge }) => {
    //     const encodedToken = encode(token, secret)
    //     return encodedToken
    //   },
    //   decode: async ({ secret, token, maxAge }) => {
    //     const decodedToken = decode(token, secret)
    //     return decodedToken
    //   }
      secret: process.env.SECRET,
      callbacks:{
      async jwt({ token, user }) {
       return {...token, ...user}
        },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token and user id from a provider.
        
         
          session.user = token;
          console.log(session.user);
        
        return session;
      }
     
      
// // }
 }
}
  
export default NextAuth(authOptions);

