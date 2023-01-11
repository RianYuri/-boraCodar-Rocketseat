import "./App.css";
import {useState}from "react";
import TitleApp from "./Components/Title/TitleApp";
import mainImg from "../public/mainImg.svg"; 
import Buttons from "./Components/Buttons/Buttons";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
function App() {
  const [verifyTouch, setVerifyTouch] = useState(false);
  const onVerifyTouch = () => {
    setVerifyTouch(!verifyTouch);
  };
  return (
    <>
      <div className="container">
        <div className="content-app__big">
        <img src={mainImg} className="img-app__big" defer />
          <TitleApp />
          <Buttons touchChecked={onVerifyTouch}/>
          <ProgressBar onPlay={verifyTouch}/>
        </div>

        <div className="container_2">
          <div className="content-app__medium"></div>
          <div className="content-app__small"></div>
        </div>
      </div>
    </>
  );
}

export default App;
