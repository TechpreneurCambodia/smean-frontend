"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-center text-2xl font-bold text-darkGray">Log In</h2>
      <div className="mt-4">
        <InputField type="email" placeholder="Email Address" />
      </div>
      <div className="mt-4">
        <InputField type="password" placeholder="Password" />
      </div>
      <div className="text-right text-sm mt-2">
        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
      </div>
      <div className="mt-4">
        <Button text="Log In" onClick={() => alert("Logging in...")} />
      </div>
      <div className="divider text-black color-black">OR</div>
      <SocialLogin />
      <p className="text-center text-sm mt-4 text-black">
        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
      </p>
    </div>
  );
};

export default LoginForm;