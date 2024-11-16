import { FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
const FindOus = () => {
  return (
    <div>
      <h1 className="text-lg font-bold my-4">Find Us On</h1>
      <div className="flex flex-col text-lg text-gray-600 gap-3 ">
        <button className="btn bg-transparent border-2 border-gray-400 justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn bg-transparent border-2 border-gray-400 justify-start">
          <BsTwitter></BsTwitter> Twitter
        </button>
        <button className="btn bg-transparent border-2 border-gray-400 justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindOus;
