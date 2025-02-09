import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="btn btn-outline">
        <FaFacebook className="text-blue-600" />
      </button>
      <button className="btn btn-outline">
        <FcGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;