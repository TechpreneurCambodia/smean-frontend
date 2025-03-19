import React from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
    <div className=" p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-left text-2xl font-bold text-darkGray">
        Forget Password
      </h2>
      <p className="text-left text-sm mt-6 mb-6 text-darkGray">
        Please enter your email to reset your password
      </p>

      <InputField type="email" placeholder="Email Address" />
      <div className="mt-6">
      <Button text="Reset Password"></Button>
      </div>
    </div>
    </div>
  );
}
