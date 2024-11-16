import Add from "../Add";
import FindOus from "../FindOus";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";

const RightAside = () => {
  return (
    <div>
      <SocialLogin></SocialLogin>
      <FindOus></FindOus>
      <QZone></QZone>
      <Add></Add>
    </div>
  );
};

export default RightAside;
