"use client";
import React from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";

export default function Page() {
  const router = useRouter(); // Initialize the router

  const handleLogin = () => {
    // Perform authentication logic here if needed
    router.push("/home"); // Redirect to the dashboard or another page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-darkGray">Log In</h2>
        <div className="mt-4">
          <InputField type="email" placeholder="Email Address" />
        </div>
        <div className="mt-4">
          <InputField type="password" placeholder="Password" />
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
  );
}
