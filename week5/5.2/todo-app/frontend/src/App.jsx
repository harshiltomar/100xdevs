import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  fetch("fetch link").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
