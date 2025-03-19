"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";
import { loginUser } from "@/services/api/auth";
import toast from "react-hot-toast";
import { humanize } from "@/services/utils/humanize";
import PublicRoute from "@/components/PublicRoute";
import { useUser } from "@/hooks/UserContext";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({ usernameOrEmail: "", password: "" });
  const { setUserState } = useUser();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      setUserState(data.user);
      router.push("/home");
      toast.success("Login successful!");
    } catch (error) {
      toast.error(humanize(error.message));
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback`;
  };

  const handleFacebookLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/facebook`;
  };

  return (
    <PublicRoute>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-center text-2xl font-bold mb-4 text-darkGray">Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <InputField
                type="text"
                name="usernameOrEmail"
                placeholder="Username/Email Address"
                value={form.usernameOrEmail}
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
            <div className="text-right text-sm mt-2">
              <Link href="/forgotpass" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4">
              <Button text="Log In" type="submit" />
            </div>
          </form>
          <div className="divider text-black color-black">OR</div>
          <SocialLogin onClickGoogle={handleGoogleLogin} onClickFacebook={handleFacebookLogin}/>
 
          <p className="text-center text-sm mt-4 text-black">
            Don't have an account?{" "}
            <Link href="/signup">
              <strong className="text-primary">Sign up </strong>
            </Link>
          </p>
        </div>
      </div>
    </PublicRoute>
  );
}