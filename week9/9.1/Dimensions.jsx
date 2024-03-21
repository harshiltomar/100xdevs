import React, { useEffect, useState } from "react";

function useDimensions() {
  const [dimensions, setDimensions] = useState({
    w: window.innerWidth,
    h: windoe.innerHeight,
  });

  const handleDimensions = () => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleDimensions);

    return () => {
      window.removeEventListener("resize", handleDimensions);
    };
  }, []);
}

function Dimensions() {
  const { w, h } = useDimensions();
  return (
    <>
      Your screen dimensions are: {w} {h}
    </>
  );
}

export default Dimensions;
