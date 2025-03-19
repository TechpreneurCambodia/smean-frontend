import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const SocialLogin = ({onClickGoogle, onClickFacebook}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="btn btn-outline" onClick={onClickFacebook}>
        <FaFacebook className="text-blue-600" />
      </button>
      <button className="btn btn-outline" onClick={onClickGoogle}>
        <FcGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;