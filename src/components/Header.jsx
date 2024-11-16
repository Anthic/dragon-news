import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-items-center items-center py-5 gap-2">
      <div className="logo">
        <img className="w-[400px]" src={logo} alt="" />
      </div>
      <h3 className="text-sm font-bold text-gray-500">
        Journalism Without Fear or Favour
      </h3>
      <p className="text-sm text-gray-500 font-bold">
        <span className="font-bold text-lg text-gray-900">
          {moment().format("dddd")},
        </span>
        {moment().format(" MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
