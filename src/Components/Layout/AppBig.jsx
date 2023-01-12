import Buttons from "../Buttons/Buttons";
import './AppBig.css';
import ProgressBar from "../ProgressBar/ProgressBar";
import TitleApp from "../Title/TitleApp";
import mainImg from "../../../public/mainImg.svg";
import { useState } from "react";

const AppBig = () => {
  const [verifyTouch, setVerifyTouch] = useState(false);
  const onVerifyTouch = () => {
    setVerifyTouch(!verifyTouch);
  };
  return (
    <div className="content-app__big">
      <img src={mainImg} className="img-app__big"  />
      <TitleApp />
      <Buttons touchChecked={onVerifyTouch} />
      <ProgressBar onPlay={verifyTouch} />
    </div>
  );
};

export default AppBig;
