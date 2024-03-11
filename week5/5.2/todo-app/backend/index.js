const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db/index");
const app = express();
const PORT = 3000;

//title, description
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });

    return;
  }

  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const Todos = await Todo.find({});
  console.log(Todos);
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Task can't be marked completed",
    });

    return;
  }

  await Todo.updateById(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
