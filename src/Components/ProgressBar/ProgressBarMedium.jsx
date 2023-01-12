import "./ProgressBarMedium.css";
import { useState, useEffect } from "react";

const ProgressBarAppMedium = (props) => {
  const [barFill, setBarFill] = useState(95);
  const [seconds, setSeconds] = useState(20);
  const [min, setMin] = useState(3);

  useEffect(() => {
    console.log(props.onPlay);
    if (props.onPlay) {
      setTimeout(() => {
        setBarFill((prevCounter) => prevCounter + 1);
        setSeconds((prevCounterSeconds) => prevCounterSeconds - 1);
      }, 100);

      if (seconds === 0) {
        setMin((prevCounterMin) => prevCounterMin -1);
        setSeconds(59);
      }
      if (min === 0 && seconds === 0) {
        setBarFill(0);
        setMin(3);
        setSeconds(20);
      }
     
    } else {
      setBarFill((prevCounter) => prevCounter);
      setMin((prevCounterMin) => prevCounterMin);
      setSeconds((prevCounterSeconds) => prevCounterSeconds);
    }
  }, [barFill, seconds, min, props.onPlay]);

  return (
    <div className="progress-bar__contentMedium">
      <div className="progress-bar__barMedium">
        <div className="progress-bar__fillMedium" style={{ width:barFill }}></div>
      </div>
      <div className="progress-bar__min">
        <p className="progress-bar__startMedium">03:20</p>
        <p className="progress-bar__endMedium">
          {seconds < 10 ? `0${min}:0${seconds}` : ` 0${min}:${seconds}`}
        </p>
      </div>
    </div>
  );
};

export default ProgressBarAppMedium;
