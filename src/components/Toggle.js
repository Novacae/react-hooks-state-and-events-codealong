import React, { useState } from "react";

function Toggle() {
  const [IsOn, setIsOn] = useState(false);

  function handleclick() {
    setIsOn((IsOn) => !IsOn);
  }
  const color = IsOn ? "red" : "white";
  return (
    <button style={{ background: color }} onClick={handleclick}>
      {IsOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
