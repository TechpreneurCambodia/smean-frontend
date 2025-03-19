"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";
import { registerUser } from "@/services/api/auth";
import toast from "react-hot-toast";
import { humanize } from "@/services/utils/humanize";
import PublicRoute from "@/components/PublicRoute";
import { useUser } from "@/hooks/UserContext";
import { stringifyError } from "next/dist/shared/lib/utils";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", username: "", password: "" });
  const { setUserState } = useUser();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      setUserState(data.user);
      router.push('/home');
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(humanize(error.message));

    }
  };

  return (
    <PublicRoute>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-center text-2xl font-bold mb-4 text-darkGray">Sign Up</h2>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <InputField
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <InputField
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <InputField
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <InputField
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <Button text="Sign Up" type="submit" />
            </div>
          </form>
          <p className="text-center text-sm mt-4 text-black">
            Already have an account?{" "}
            <Link href="/login">
              <strong className="text-primary">Log in </strong>
            </Link>
          </p>
        </div>
      </div>
    </PublicRoute>
  );
}
