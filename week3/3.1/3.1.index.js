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

// const app = require("express");

// function userMiddleware(req, res, next) {
//   if (username != "harshil" || password != "Supriya") {
//     res.status(403).json({
//       msg: "Incorrect Inputs",
//     });
//   } else {
//     next();
//   }
// }

// function kiddneyMiddleware(req, res, next) {
//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(403).json({
//       msg: "Incorrect Kidney Inputs",
//     });
//   } else {
//     next();
//   }
// }

//ZOD APPLICATION

const express = require("express");
const zod = require("zod");
const app = express();

const mySchema = zod.array(zod.number());

const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
});

function validateInput(arr) {
  const schema = zod.array(zod.number());

  const response = schema.safeParse(arr);
  console.log(response);
}

validateInput([1, 2, 3]);

const schema2 = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

const response2 = schema2.safeParse(obj);
console.log(response2);

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  //kidney= [1,2]
  const kidneys = req.body.kidneys;
  const response = mySchema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});
