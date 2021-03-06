import React, {useState, useEffect, useRef} from "react";
import Lift from "./Lift";
import Button from "./Button";
import Timer from "./Timer";
import "../Styles/Home.css";

function Home() {
  const [lifts, setLifts] = useState([1]);
  const [workoutArr, setWorkoutArr] = useState([]);
  const liftNameInputRef = useRef(null);

  function addLift() {
    const newLiftNum = lifts.length + 1;
    setLifts(prev => [...prev, newLiftNum]);
  }

  //Checks to see if the lift is already in workoutArr and replaces/adds it
  function addToWorkout(liftObj) {
    if (workoutArr.some(obj => obj.id === liftObj.id)) {
      setWorkoutArr(workoutArr.map(obj => {
        if (obj.id === liftObj.id) {
          return liftObj;
        } else {
          return obj;
        }
      }));
    } else {
      setWorkoutArr([...workoutArr, liftObj]);
    }
  }
  
  //Saves workout to localStorage
  function saveWorkout() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();
    const dateString = `${month}-${date}-${year}`;

    const workoutObj = {[dateString]: workoutArr};
    const workoutHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    const newWorkoutHistory = [...workoutHistory, workoutObj];
    
    localStorage.setItem("workoutHistory", JSON.stringify(newWorkoutHistory));
  }

  //Focuses the Lift input when a new lift is added
  useEffect(() => {
    liftNameInputRef.current.focus();
  }, [lifts]);

  const allLifts = lifts.map(liftNum => {
    return <Lift key={liftNum}
                 id={liftNum}
                 ref={liftNameInputRef}
                 addToWorkout={addToWorkout}
    />
  })

  return (
    <div className="home">
      <div className="liftsContainer">
        {allLifts}
        <Button text="ADD LIFT"
                onClick={addLift}
        />
      </div>
      <Button text="SAVE WORKOUT"
              id="saveButton" 
              onClick={saveWorkout}
      />
      <Timer />
    </div>
  )
}

export default Home;
