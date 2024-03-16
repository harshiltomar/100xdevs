import React, { useCallback, useState } from "react";

const App2 = () => {
  const [inputText, setInputTex] = useState("");

  //
  const showAlert = useCallback(() => {
    alert(inputText);
  });

  //
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputTex(e.target.value)}
        placeholder="Enter some Text"
      />
      <Alert showAlert={showAlert} />
    </div>
  );
};

function Alert({ showAlert }) {
  return <button onClick={showAlert}>Show Alert</button>;
}

export default App2;
