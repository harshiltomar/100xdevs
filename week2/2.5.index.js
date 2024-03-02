const express = require("express");
const app = express();

const users = [
  {
    name: "Johny DoePoeSoe",
    healthyKidney: 1,
    unhealthyKidney: 1,
    totalKindey: 2,
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const healthystuff = users[0].healthyKidney;
  const unhealthystuff = users[0].unhealthyKidney;
  const totalstuff = users[0].totalKindey;
  res.json({
    healthystuff,
    unhealthystuff,
    totalstuff,
  });
});

app.post("/", function (req, res) {
  const healthystuff = req.body.healthyKidney || 0;
  while (healthystuff > 0) {
    users[0].unhealthyKidney--;
    users[0].healthyKidney++;
    healthystuff--;
  }
  res.json({
    message: "Operation done boi!",
  });
});

app.delete("/", function (req, res) {
  if (users[0].unhealthyKidney > 0) {
    users[0].unhealthyKidney = 0;

    res.json({
      message: "Deleted Broski",
    });
  } else {
    res.json({
      message: "Bro is all healthy",
    });
  }
});

app.listen(3000);
