import First from "../assets/swimming.png";
import Second from "../assets/playground.png";
import Third from "../assets/class.png";

const QZone = () => {
  return (
    <div className="flex flex-col py-4 px-3 bg-[#F3F3F3] gap-3 mt-6">
      <h1 className="text-2xl font-bold py-4">Q-Zone</h1>
      <div className=" bg-white ">
        <img
          className="w-full h-full object-cover"
          src={First}
          alt="swimming"
        />
      </div>
      <div>
        <img
          className="w-full h-full object-cover"
          src={Second}
          alt="playground"
        />
      </div>
      <div>
        <img className="w-full h-full object-cover" src={Third} alt="classs" />
      </div>
    </div>
  );
};

export default QZone;
