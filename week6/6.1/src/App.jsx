import React, { Fragment, useState } from "react";

function App() {
  const [title, setTitle] = useState("Harshil");

  function updateTitle() {
    setTitle(Math.random());
  }

  return (
    <>
      <Header title={title}></Header>
      <Header title="Tomar"></Header>
      <button onClick={updateTitle}>Update Title Name</button>
    </>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
