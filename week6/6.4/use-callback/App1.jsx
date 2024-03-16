import React, { memo, useCallback, useState } from "react";

const App1 = () => {
  const [count, setCount] = useState(0);

  const handlePlus = useCallback(() => {
    setCount(function (currentCount) {
      return currentCount + 1;
    });
  }, []);

  const handleMinus = useCallback(() => {
    setCount((count) => {
      return count - 1;
    });
  }, []);

  //
  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons onIncrement={handlePlus} onDecrement={handleMinus} />
    </div>
  );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));

export default App1;
