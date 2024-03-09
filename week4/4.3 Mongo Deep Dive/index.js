const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin.route");
const userRouter = requier("./routes/user.route");

//Middleware for parsing req bodies
app.use(bodyParser.json());

//app.use
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
