import "./ProgressBar.css";
import { useState, useEffect } from "react";

const ProgressBar = (props) => {
  const [barFill, setBarFill] = useState(0);
const [seconds, setSeconds] = useState(0);
const [min,setMin] = useState(0)

  useEffect(() => {
    console.log(props.onPlay);
    if(props.onPlay){
         
    setTimeout(()=>{

        setBarFill((prevCounter) => prevCounter + 1);
    setSeconds((prevCounterSeconds)=> prevCounterSeconds + 1 );

  
    },100)

    if(seconds >= 59){
        setMin((prevCounterMin) => prevCounterMin + 1)
        setSeconds(0);
             }
             if(min === 3 && seconds === 20){
                setBarFill(0);
                setMin(0);
                setSeconds(0);
             }
    
            }else{
              setBarFill((prevCounter)=>prevCounter);
              setMin((prevCounterMin)=>prevCounterMin);
              setSeconds((prevCounterSeconds)=>prevCounterSeconds);
        
                         }
  }, [barFill,seconds,min,props.onPlay])




  return (
    <>
      <div className="progress-bar__bar">
        <div
          className="progress-bar__fill"
        
          style={{ width: barFill }}
        ></div>
      </div>
      <div className="progress-bar__min">
        <p className="progress-bar__start">03:20</p>
        <p className="progress-bar__end">
        {seconds < 10
            ? `0${min}:0${seconds}`
            : ` 0${min}:${seconds}`
          } 
        </p>
      </div>
    </>
  );
};

export default ProgressBar;
