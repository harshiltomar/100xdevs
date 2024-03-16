import React, { useState } from "react";

const App3 = () => {
  const [items, setItems] = useState([
    { name: "Chocholate", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 40 },
    { name: "Whey", value: 3000 },
  ]);

  //
  const totalVal = 0;
  for (let i = 0; i < items.length; i++) {
    totalVal = totalVal + items[i];
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          <li key={index}>
            {" "}
            {item.name} - Price: ${item.value}
          </li>;
        })}
      </ul>
      <p>Total Value: {totalVal}</p>
    </div>
  );
};

export default App3;
