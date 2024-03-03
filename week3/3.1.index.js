// const express = require("express");

// const app = express();

// app.get("/health-checkup", function (req, res) {
//   //Do health checks here
//   const kidneyId = req.query.kidneyId;
//   const username = req.query.username;
//   const password = req.query.password;

//   if (username != "harshil" || password != "Supriya") {
//     res.status(400).json({
//       msg: "Something wrong wiht your user inputs",
//     });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(411).json({
//       msg: "Something wrong wiht your kindey inputs",
//     });
//     return;
//   }

//   //Kidney operations
//   res.send("Your heart is healthy");
// });

// app.listen(3000);

//MIDDLEWARE CODE

const app = require("express");

function userMiddleware(req, res, next) {
  if (username != "harshil" || password != "Supriya") {
    res.status(403).json({
      msg: "Incorrect Inputs",
    });
  } else {
    next();
  }
}

function kiddneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect Kidney Inputs",
    });
  } else {
    next();
  }
}
