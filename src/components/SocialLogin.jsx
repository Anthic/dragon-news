import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="">
      <h1 className="text-lg font-bold mb-4">Login with</h1>
      <div className="flex flex-col gap-2">
        <button className="btn bg-transparent border-2 border-[#58A7DE] rounded-md text-[#58A7DE] text-lg p-2 hover:bg-transparent hover:border-[#58A7DE] ">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn bg-transparent border-2 border-[#161718] rounded-md text-[#111112] text-lg p-2 hover:bg-transparent hover:border-[#161718]">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
