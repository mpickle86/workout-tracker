import React, {useState} from "react";

function TimerInputs(props) {
  
  //Adds zero in front of single-digit numbers
  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  
  //Populates minutes options
  let minutesArr = [];
  for (let i = 0; i <= 59; i++) {
    minutesArr.push(i);
  }
  const minutesOptions = minutesArr.map(num => {
    return <option>{addZero(num)}</option>
  });

  //Populates seconds options
  let secondsArr = [];
  for (let i = 0; i <= 59; i++) {
    secondsArr.push(i);
  }
  const secondsOptions = secondsArr.map(num => {
    return <option>{addZero(num)}</option>
  });

  function changeMinutes(event) {
    props.setMinutes(event.target.value);
  }

  function changeSeconds(event) {
    props.setSeconds(event.target.value);
  } 

  return (
    <form>
      <select value={props.minutes} onChange={changeMinutes}>
       {minutesOptions}
      </select>
      <select value={props.seconds} onChange={changeSeconds}>
       {secondsOptions}
      </select>
    </form>
  )
}

export default TimerInputs;