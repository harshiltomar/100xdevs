import React, { useEffect, useState } from "react";

const App = () => {
  return <div>App</div>;
};

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender((render) => !render);
    }, 1000);
  }, []);

  if (!render) {
    <div>False hogya bro</div>;
  }

  return <>{render ? <myComponent /> : <div>False hogya vro</div>}</>;
}

// function myComponent() {
//   useEffect(() => {
//     console.error("Component mounted");

//     return () => {
//       console.log("Component unmounted");
//     };
//   }, []);

//   return <div>From inside my component</div>;
// }

// class myComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function myComponent() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={increaseCount}> Increment </button>
//     </div>
//   );
// }

export default App;
