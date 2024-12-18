import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#e3e4e6] aling-items-center ">
      <header className="w-11/12 mx-auto py-2  ">
        <NavBar></NavBar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
