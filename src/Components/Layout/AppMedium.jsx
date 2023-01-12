import "./AppMedium.css";
import ButtonsAppMedium from "../Buttons/ButtonsAppMedium";
import ProgressBarAppMedium from "../ProgressBar/ProgressBarMedium";
import TitleAppMedium from "../Title/TitleAppMedium";
import mainImg from "../../../public/mainImg.svg";
import { useState } from "react";
const AppMedium = () => {
    const [verifyTouch, setVerifyTouch] = useState(false);
    const onVerifyTouch = () => {
      setVerifyTouch(!verifyTouch);
    };
  return (
    <div className="content-app__medium">
      <div className=" content-app__mediumTitle">
        <img src={mainImg} className="img-app__medium"  />
        <TitleAppMedium />
      </div>
      <div className="content-app__medium-object">
        <ButtonsAppMedium  touchChecked={onVerifyTouch}/>
        <ProgressBarAppMedium onPlay={verifyTouch}/>
      </div>
    </div>
  );
};

export default AppMedium;
