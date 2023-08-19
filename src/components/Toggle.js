import React from "react";
import { useState } from "react";
function Toggle() {
  const[isOn,setisOn] = useState(false);
  

  function btnHandler(event){
    event.preventDefault()
    setisOn(!isOn)
  }
  return <button onClick={btnHandler}>{isOn ? 'ON':'OFF'}</button>;
}

export default Toggle;
