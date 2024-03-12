import React, { useEffect, useState } from "react";

function App() {
  //   const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     axios.get("https://blehbleh").then(function (res) {
  //       setTodos(res.data.todos);
  //     });
  //   }, []);

  // ID Effect
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setSelectedId(4);
        }}
      >
        4
      </button>

      <Todo id={selectedId} />
    </div>
  );

  useEffect(() => {
    axios.get("https://blehbleh?id=" + id).then((response) => {
      setTodos(response.data.todo);
    });
  });

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}
export default App;
