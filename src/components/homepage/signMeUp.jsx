import React, { useState } from "react";
import classNames from "classnames";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/homepage/nav";

function SignMeUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  const confirmPasswordClassName = classNames({
    "form-input": true,
    "border-red-500": passwordMatchError,
  });

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="form-input w-full border mb-2 py-2 px-3"
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="form-input w-full border mb-2 py-2 px-3"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className={confirmPasswordClassName + " w-full border mb-2 py-2 px-3"}
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm your password"
            />
            {passwordMatchError && (
              <p className="text-red-500 mt-2">The passwords do not match</p>
            )}
          </div>
          <button
            className="bg-[#64abd3] hover:bg-[#b2bb1e] text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:bg-blue-500 disabled:cursor-not-allowed w-60"
            type="submit"
            disabled={passwordMatchError}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default SignMeUp;
