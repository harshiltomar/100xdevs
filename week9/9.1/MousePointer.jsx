import React, { useEffect, useState } from "react";

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clienty });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

function MousePointer() {
  const MouseP = useMousePointer();

  return (
    <>
      Your mouse position is: {MouseP.x} {MouseP.y}
    </>
  );
}

export default MousePointer;
