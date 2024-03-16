import React, { useEffect } from "react";

const App1 = () => {
  useEffect(() => {}, []);

  const handleButtonClick = () => {};

  return (
    <div>
      <input type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}></button>
    </div>
  );
};

export default App1;
