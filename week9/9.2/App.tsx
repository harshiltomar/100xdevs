import React from "react";

function App() {
  return (
    <div>
      <Todo title="Gym" description="Go to Gym" done={false} />
    </div>
  );
}

interface TodoProp {
  title: string;
  description: string;
  done: boolean;
}

function Todo(props: TodoProp) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

export default App;
