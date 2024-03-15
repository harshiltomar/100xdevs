import React, { useCallback, useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [bankData, setBankData] = useState({});
  const [exchangeData, setExchangeData] = useState([]);

  useEffect(() => {
    fetch("https://google.com", async (res) => {
      const json = await res.json();
      setBankData(json);
      //Assume it is income
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    });
  }, 1000);

  const incomeTax = (bankData + exchangeData.returns) * 0.3;

  const calcCryptoReturns = useCallback(
    function () {
      return exchangeData.returns + bankData.returns;
    },
    [exchangeData, bankData]
  );

  return (
    <div>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Count is {count}
      </button>
    </div>
  );
};

export default App;
