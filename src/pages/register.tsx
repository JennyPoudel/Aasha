// import { NextPage } from "next";
// import { signIn } from "next-auth/react";
// import { FormEventHandler, useState } from "react";
// import Link from 'next/link'
// import { useRouter } from 'next/router';
// import axios from 'axios';



// const SignIn: NextPage = (props): JSX.Element => {
//   const [userInfo, setUserInfo] = useState({ username: "", password: "" });
//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');
//   const router = useRouter();
//   const headers = {
//     'Content-Type': 'application/json'
//   }
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/signup',userInfo, {
//       headers: headers
//     }
      
//       );
//       console.log(response.data);
//       router.push('/login');
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred while saving your information.');
//     }
//   };
//   // const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//   //   // validate your userinfo
//   //   e.preventDefault();
//   //   const options = {
//   //     method: "POST",
//   //     headers : { 'Content-Type': 'application/json'},
//   //     body: JSON.stringify(userInfo)
//   // }
//   // await fetch('http://localhost:3000/api/auth/signup', options)
//   // .then(res => res.json())
//   // .then((data) => {
//   //     if(data) router.push('http://localhost:3000/login')
//   // })
// //   const response = await axios({
// //     method: "POST",
// //     url: "http://localhost:3000/api/auth/signup",
// //     data: userInfo,
// //     headers: {
// //      "Content-Type": "application/json",
// //     },
// //   }).then((res) => console.log(res));
// // } catch (err) {
// //   console.log(err);


    
// //    };


  

//   return (
//     <section class="h-screen">
//     <div class="px-6 h-full text-gray-800">
//     <div
//       class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
//     >
//       <div
//         class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
//       >
//         <img
//           src="logo.svg"
//           class="w-full"
//           alt="Sample image"
//         />
//       </div>
//       <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
//         <form  onSubmit={handleSubmit} >
          
//           <div class="flex flex-row items-center justify-center lg:justify-start">
//             </div>

//           <div
//             class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
//           >
            
//           </div>

         
//           <div class="mb-6">
//             <input
//               value={userInfo.username}
//               type="text"
           
//               class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//               id="exampleFormControlInput2"
//               placeholder="Email address"
//               onChange={({target})=>
//               setUserInfo({...userInfo,username:target.value})
//              }
//             />
            
//           </div>

          
//           <div class="mb-6">
//             <input
//               value={userInfo.password}
//               type="password"
//               class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//               id="exampleFormControlInput2"
//               placeholder="Password"
//               onChange={({target})=>
//               setUserInfo({...userInfo,password:target.value})
//              }
//             />
//           </div>

//           <div class="flex justify-between items-center mb-6">
//             <div class="form-group form-check">
             
              
              
//             </div>
//             {/* <a href="#!" class="text-gray-800">Forgot password?</a> */}
//           </div>

//           <div class="text-center lg:text-left">
            
//             <button
//               type="submit"
//               value="Login"
//               class="inline-block px-7 py-3 bg-[#8BC34A] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#B2BB1E] hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
//             >
//             Register
//             </button>
           
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//  </section>
// )
// }

// export default SignIn;