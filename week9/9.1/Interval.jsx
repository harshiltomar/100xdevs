// import React, { useEffect, useState } from "react";

// function Interval() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount((c) => c + 1);
//   }, 1000);

//   return <>Timer is at {count}</>;
// }

// export default Interval;

import React, { useEffect, useState } from "react";

function useInterval(fn, timeout) {
  useEffect(() => {
    setInterval(() => {
      fn();
    }, timeout);
  }, []);
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(
    setCount((c) => c + 1),
    1000
  );

  return <>Timer is at {count}</>;
}

export default App;
