import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div className="flex items-center gap-4 py-3 px-2 bg-[#F3F3F3]">
      <span className="py-2 px-3 bg-[#D72050] text-white rounded-md font-bold">
        Latest
      </span>
      <Marquee pauseOnHover={true} className="space-x-5">
        <Link to={"/news"}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <Link to={"/news"}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <Link to={"/news"}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </Marquee>
    </div>
  );
};

export default Latest;
