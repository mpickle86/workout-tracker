import React, {useState, useEffect} from "react";

function InputBox(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    props.addToLift(props.name, input)
  }, [input])

  return (
    <input type="text"
           placeholder={props.name}
           value={input}
           onChange={handleChange}
    />
  )
}

export default InputBox;