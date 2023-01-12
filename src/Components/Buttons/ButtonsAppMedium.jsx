import "./ButtonsAppMedium.css";
import back from "../../../public/buttons/playBack.svg";
import play from "../../../public/buttons/play.svg";
import skip from "../../../public/buttons/playForward.svg";
import { useState } from "react";

const ButtonsAppMedium = (props) => {
    const [onPlay, setOnPlay] = useState(false);

  const playHandler = () => {
    setOnPlay(!onPlay);
    props.touchChecked();
  };

return (
    <div className="buttonsApp__medium">
        <img src={back} />
        <img src={play} className="buttons__play-medium" onClick={playHandler} />
        <img src={skip} />
    </div>
)

};

export default ButtonsAppMedium;