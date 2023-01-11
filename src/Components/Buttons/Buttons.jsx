import "./Buttons.css";
import back from "../../../public/buttons/playBack.svg";
import play from "../../../public/buttons/play.svg";
import skip from "../../../public/buttons/playForward.svg";
import { useState } from "react";

const Buttons = (props) => {
    const [onPlay, setOnPlay] = useState(false);

  const playHandler = () => {
    setOnPlay(!onPlay);
    props.touchChecked();
  };

return (
    <div className="buttons">
        <img src={back} />
        <img src={play} className="buttons__play" onClick={playHandler} />
        <img src={skip} />
    </div>
)

};

export default Buttons;