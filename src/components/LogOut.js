import React from "react";
import Button from "./Button";
import { logoutUser } from "@/services/api/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { humanize } from "@/services/utils/humanize";

function LogOut() {
  const router = useRouter();
  const handleLogOut = async (e) => {
    try {
        const response = await logoutUser();
        router.push('/login')
        toast.success("Logout Successful!");
    } catch (error) {
        toast.error(humanize(error));
    }
  }
  return (
    <div>
      <Button text="Log out" type="submit" onClick = {() => handleLogOut()} />
    </div>
  );
}

export default LogOut;
