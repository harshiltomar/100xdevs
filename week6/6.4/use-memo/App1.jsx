import React, { useMemo, useState } from "react";

const App1 = () => {
  const [input, SetInput] = useState(0);

  const Val = useMemo(() => {
    let initval = 1;
    for (let i = 1; i <= input; i++) {
      Val = Val * i;
    }
    return initval;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => SetInput(Number(e.target.value))}
      />
      <p> Calculated Factorial: {Val}</p>
    </div>
  );
};

export default App1;
