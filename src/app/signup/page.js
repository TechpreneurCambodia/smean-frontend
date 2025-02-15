"use client";
import React from "react";

import SocialSignUp from "@/components/SocialSignUp";
import FloatingInput from "@/components/FloatingInput";
import Button from "@/components/Button";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.BASE_URL}/auth/register`,
        {
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname,
          username: username,
        }
      );
      console.log("email", email);
      console.log("response", response);
      if (response.status === 200 || response.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status == 400) {
        const message = error.response.data.message;
        setErrorMessage(message);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.log("Errr", error);
    }
    console.log("email", email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-left text-2xl font-bold text-darkGray">
          Create Account
        </h2>
        {errorMessage && ( // Conditionally render alert
            <Alert message={errorMessage} />
          )}
        <SocialSignUp />
        <div className="divider text-black color-black">OR</div>

        <div className="mt-4">
          <FloatingInput
            type="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <FloatingInput
            type="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <FloatingInput
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <FloatingInput
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <FloatingInput type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="mt-12">
          <Button
            text="Create Account"
            onClick={() => {
              handleLogin();
            }}
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
