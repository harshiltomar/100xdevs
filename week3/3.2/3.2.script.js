const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect("hidding bcz github op");

//USER MODAL DESCRIBE
const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

//This is a in Memory DB
// const ALL_USERS = [
//   {
//     username: "harshiltoma20@gmail.com",
//     password: "123",
//     name: "harshil tomar",
//   },
//   {
//     username: "example@example.com",
//     password: "password123",
//     name: "John Doe",
//   },
//   {
//     username: "test@test.com",
//     password: "test123",
//     name: "Jane Smith",
//   },
// ];

async function userExists(username, password) {
  //Logic for T or F if user exists in ALL_USER array
  // const existingUser = await ALL_USERS.find(
  //   (user) => user.username === username
  // );
  // const existingPassword = await ALL_USERS.find(
  //   (user) => user.password === password
  // );
  // if (existingUser && existingPassword) {
  //   return true;
  // }
  // return false;
  //Now check in database
}

//CREATE USER
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ name: username });
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "User created successfully",
  });
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });

  if (!existingUser) {
    return res
      .status(403)
      .send("User doesn't exist. Please try signin up or check info");
  }

  if (existingUser.password !== password) {
    return res.status(401).send("Invalid Pass Bro");
  }

  res.json({
    msg: "Congrats, You are signed in",
  });
});

// app.post("/signin", function (req, res) {
//   const username = req.body.password;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User does not exist in our Memory DB",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     //Return a list of users other than this username
//     // res.json({
//     //   users: ALL_USERS.filter(function (value) {
//     //     if (value.username == username) {
//     //       return false;
//     //     } else {
//     //       return true;
//     //     }
//     //   }),
//     // });

//     //NOW USE DB BROSKI
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

app.listen(3000);
