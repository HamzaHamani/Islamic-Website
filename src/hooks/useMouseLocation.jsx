import { useEffect } from "react";
import { useState } from "react";

function UseMouseLocation() {
  const [mousePoistion, SetMousePosition] = useState({ x: 0, y: 0 });
  function updateMousePos(e) {
    SetMousePosition({ x: e.clientX, y: e.clientY });
    console.log(e.clientX);
  }
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePos);
    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  return mousePoistion;
}

export default UseMouseLocation;
