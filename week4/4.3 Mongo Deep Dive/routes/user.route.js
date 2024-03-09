const { Router } = require("express");
const userMiddleware = require("../middleware/user.middleware");
const { User, Course } = require("../db");
const router = Router();

//User Routes
router.post("/signup", (req, res) => {
  //Signup Logic
  const username = req.body.username;
  const password = req.body.password;

  //Check if pre-existing user
  User.findOne({
    username: username,
    password: password,
  }).then(
    res.json({
      msg: "User Already exist bro",
    })
  );

  //If not, create new user
  User.create({
    username: username,
    password: password,
  }).then(
    res.json({
      msg: "Admin created successfully",
    })
  );
});

router.get("/courses", (req, res) => {
  //All Course Logic
  const response = Course.find({}).then(function (response) {
    res.json({
      courses: response,
    });
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  const id = req.params.courseId;
  const username = req.header.username;
  //Course Purchase Logic
  User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  ).catch(function (e) {
    console.log(e);
  });

  res.json({
    message: "Purchase Completed!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  //Fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
});

module.exports = router;
