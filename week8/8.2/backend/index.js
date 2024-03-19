const express = require("express");
const rootRouter = require("./routes/index");
const accountRouter = require("./routes/account");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});

//user, transaction
app.use("/ap1/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server Started and is listening at http://localhost:${PORT}`);
});
