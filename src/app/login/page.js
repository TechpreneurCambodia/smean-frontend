"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";
import axios from "axios";
import Alert from "@/components/Alert";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.BASE_URL}/auth/login`, {
        usernameOrEmail: email,
        password,
      });
      console.log("response", response);
      if (response.status === 200 || response.status === 201) {
        router.push("/home");
      }
    } catch (error) {
      if (error.response.status == 400) {
        const message = error.response.data.message;
        setErrorMessage(message); 
      } else {
        setErrorMessage("An error occurred. Please try again."); 
      }
      console.log("Errr", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-center text-2xl font-bold mb-4 text-darkGray">Log In</h2>
          {errorMessage && ( // Conditionally render alert
            <Alert message={errorMessage} />
          )}
          <div className="mt-4">
            <InputField
              type="text"
              name="usernameOrEmail"
              placeholder="Username/Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-right text-sm mt-2">
            <Link href="/forgotpass" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="mt-4">
            <Button text="Log In" onClick={handleLogin} />
          </div>
          <div className="divider text-black color-black">OR</div>
          <SocialLogin />
          <p className="text-center text-sm mt-4 text-black">
            Don't have an account?{" "}
            <Link href="/signup">
              <strong className="text-primary">Sign up </strong>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}