"use client"
import React from "react";

import SocialSignUp from "@/components/SocialSignUp";
import FloatingInput from "@/components/FloatingInput";
import Button from "@/components/Button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-left text-2xl font-bold text-darkGray">
          Create Account
        </h2>
        <SocialSignUp />
        <div className="divider text-black color-black">OR</div>

        <div className="mt-4">
          <FloatingInput type="fullname" placeholder="Full Name" />
        </div>

        <div className="mt-4">
          <FloatingInput type="email" placeholder="Email Address" />
        </div>
        <div className="mt-4">
          <FloatingInput type="password" placeholder="Password" />
        </div>

        <div className="mt-12">
          <Button
            text="Create Account"
            onClick={() => alert("Logging in...")}
          />
        </div>

        <p className="text-center text-sm mt-4 text-black">
          Already have an account?{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            <strong className="text-primary">Login </strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
