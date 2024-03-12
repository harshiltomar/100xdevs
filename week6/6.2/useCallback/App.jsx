import React from "react";
import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ButtonComponent inputFunction={logSomething} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me: {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("Child Render");

  return (
    <div>
      <button onClick={inputFunction}>Button Clicked !</button>
    </div>
  );
});

export default App;
