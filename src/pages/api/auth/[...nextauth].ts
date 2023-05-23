import NextAuth,{ NextAuthOptions }  from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from '../../../../connection/conn'
import UsersL from '../../../../model/login'
import { compare } from 'bcryptjs';
//import { MongoDBAdapter } from "next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"

export const authOptions: NextAuthOptions = {
 // adapter: MongoDBAdapter(clientPromise),
  providers: [
    // GoogleProvider({
    //   clientId:process.env.GOOGLE_ID,
    //   clientSecret:process.env.GOOGLE_SECRET,
    
    // }),
   
    CredentialsProvider({
      name : "Credentials",
      
      async authorize(credentials, req){
          connectMongo().catch(error => { error: "Connection Failed...!"})
         const {email,password}=credentials
          // check user existance
          const user = await UsersL.findOne( {email :credentials.email})
          //console.log(result)
          if(!user){
              throw new Error("No user Found with Email Please Sign Up...!")
          }

          // compare()
          const checkPassword = await compare(credentials.password, user.password);
          console.log(checkPassword)
          // incorrect password
          if(!checkPassword || user.email !== credentials.email){
              throw new Error("Username or Password doesn't match");
          }
         

          return user._doc;

      }
      }),
    ],
     
      // maxAge: 30 * 24 * 60 * 60,
      // secret: process.env.SECRET,

  
    //   encode: async ({ secret, token, maxAge }) => {
    //     const encodedToken = encode(token, secret)
    //     return encodedToken
    //   },
    //   decode: async ({ secret, token, maxAge }) => {
    //     const decodedToken = decode(token, secret)
    //     return decodedToken
    //   }
     
      // callbacks:{
      //   async session({ session,token, user }) {
    
      //     //session.user = token;
      //       //console.log(session.user);
          
      //     if(user && user._id){
      //       session.user.id=token.id;
      //     }
      //     console.log('session',{session,user})
      //     return session;
      //   },
       
      // async jwt({ token, user }) {
      //  //return {...token, ...user}

      
      //  if(user && user._id){
      //   token.id=user._id;
      //  }
      //  console.log('jwt',{token,user})
      //  return token
      //   },
      callbacks: {
        async session(session, user) {
          console.log("session", { session, user });
          if (user && user.id) {
            session.user.id = user.id;
          }
          return session;
        },
        async jwt(token, user, account, profile, isNewUser) {
          console.log("jwt", { token, user });
          if (user && user._id) {
            token.id = user._id;
          }
          return token;
        },
     
      
// // }
 }
}
  
export default NextAuth(authOptions);



