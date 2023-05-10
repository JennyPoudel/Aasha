
// backup for profile.js
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useState } from 'react'

const AppBar = () => {
  const { data: session } = useSession();
  console.log({ session});
  const [posts, setPosts] = useState();
  const fetchPost = async () => {
    const res = await fetch("http://localhost:3000/api/getdata", {
      method: "Get",
      headers: {
        authorization: `bearer ${session?.user.jti}`,
      },
    });

    const response = await res.json();
    setPosts(response);
    console.log(response);
  };

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
      <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user._doc.username}</p>
            <div>
          <button
              type="button"
              onClick={fetchPost}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            ></button></div>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;