import React, {useState} from "react";
import TimerInputs from "./TimerInputs";
import TimerDisplay from "./TimerDisplay";
import Button from "./Button";
import "../Styles/Timer.css";

function Timer() {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  
  const startButton = <Button text="START" onClick={startTimer} />;
  const stopButton = <Button text="STOP" onClick={stopTimer} />;

  function startTimer() {
    setTimerIsRunning(true);
  }

  function stopTimer() {
    setTimerIsRunning(false);
  }

  return (
    <div className="timer">
      {timerIsRunning ?
        <TimerDisplay minutes={minutes}
                      seconds={seconds}
                      setTimerIsRunning={setTimerIsRunning}
        /> :
        <TimerInputs minutes={minutes}
                     setMinutes={setMinutes}
                     seconds={seconds}
                     setSeconds={setSeconds}
        />}
      {timerIsRunning ? stopButton : startButton}
    </div>
  )
}

export default Timer;