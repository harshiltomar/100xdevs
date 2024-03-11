const mongoose = require("mongoose");

mongoose.connect("mongodb url opop");

const TodoSchema = {
  title: String,
  description: String,
  completed: Boolean,
};

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo,
};
