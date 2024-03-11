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
        onClick={() => {
          fetch("url", {
            method: "post",
            body: {
              title: title,
              description: description,
            },
          });
        }}
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
