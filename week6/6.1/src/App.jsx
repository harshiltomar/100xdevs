import React, { Fragment, useState } from "react";

function App() {
  <div>
    <CardWrapper>Hi There</CardWrapper>;
  </div>;
}

function CardWrapper({ children }) {
  //Div with Black Border

  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

export default App;
