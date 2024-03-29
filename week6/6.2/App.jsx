import { memo, useEffect, useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://blahblah").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  function ClickStuff() {
    console.log("Child Clicked");
  }

  const Child = memo(({ ClickStuff }) => {
    console.log("Child Render");

    return (
      <div>
        <button onClick={ClickStuff}>Button Clicked</button>
      </div>
    );
  });

  return (
    <div>
      <Child onClick={ClickStuff}>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me: {count}
        </button>
      </Child>
    </div>
  );
}

export default App;
