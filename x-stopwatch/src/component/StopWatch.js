import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [startBtn, setStartBtn] = useState(false);
  const intervalRef = useRef(null);

  const handleStartBtn = () => {
    if (!startBtn) {
      setStartBtn(true);
      intervalRef.current = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinutes((prevminutes)=>prevminutes + 1);
            return 0;
          }else{
            return prevSecond + 1;
          }
        });
        
      }, 1000);
    }
  };

  const handleResetBtn = () => {
    clearInterval(intervalRef.current)
    setSecond(0);
    setMinutes(0);
    setStartBtn(false);
  };
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <h1>Stopwatch</h1>
      <p>
        Time:&nbsp; {minutes}:{second}
      </p>
      <button onClick={handleStartBtn}>Start</button>
      <button onClick={handleResetBtn}>Reset</button>
    </div>
  );
};

export default StopWatch;
