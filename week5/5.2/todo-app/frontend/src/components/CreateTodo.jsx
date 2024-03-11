import React from "react";

function CreateTodo() {
  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
      ></input>
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
      ></input>
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
