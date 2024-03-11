import React from "react";

function Todos(props) {
  const { title, description } = props;
  return (
    <div>
      {Todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
