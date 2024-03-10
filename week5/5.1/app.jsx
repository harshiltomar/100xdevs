// import React from "react";

// function App() {
//   return (
//     <div>
//       <Button count={count} setCount={setCount}></Button>
//     </div>
//   );
// }

// function Button(props) {
//   function onButtonClick() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onButtonClick}> Counter {props.count}</button>;
// }

// export default App;

import React from "react";
import { useState } from "react";

function app() {
  const [count, setCount] = useState(0); //[1,2]

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count + 1} setCount={setCount}></CustomButton>
      <CustomButton count={count - 1} setCount={setCount}></CustomButton>
      <CustomButton count={count * 100} setCount={setCount}></CustomButton>
    </div>
  );
}

//component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter: {props.count}</button>;
}

export default app;
