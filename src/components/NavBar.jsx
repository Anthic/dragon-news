import { Link } from "react-router-dom";
import userIcone from "../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <div className="empty-space"></div>
      <div className="nav flex flex-col md:flex-row lg:flex-row items-center gap-3 text-gray-500 font-semibold ">
        <Link className="hover:text-gray-800" to="/">
          Home
        </Link>
        <Link className="hover:text-gray-800" to="/about">
          About
        </Link>
        <Link className="hover:text-gray-800" to="/career">
          Career
        </Link>
      </div>
      <div className="social links flex items-center gap-3">
        <div className="userIcone">
          <img src={userIcone} alt="" />
        </div>
        <Link
          to={"/auth/login"}
          className="py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
