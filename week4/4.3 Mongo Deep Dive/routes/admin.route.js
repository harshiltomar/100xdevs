const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.middleware");
const { Admin, Course } = require("../db");
const router = Router();

//Admin Routes
router.post("/signup", (req, res) => {
  //Signup Logic
  const username = req.body.username;
  const password = req.body.password;

  //Check if user pre-exist
  Admin.findOne({
    username: username,
    password: password,
  }).then(
    res.json({
      msg: "Admin already exists for this Input",
    })
  );

  //If not, create new user
  Admin.create({
    username: username,
    password: password,
  }).then(
    res.json({
      msg: "Admin created successfully",
    })
  );
});

router.post("/courses", adminMiddleware, (req, res) => {
  //Course Creation Logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  }).then(
    res.json({
      msg: "Course has been created successfully",
      courseId: newCourse._id,
    })
  );
});

router.get("/courses", adminMiddleware, (req, res) => {
  //Implement fetching all courses logic
  const response = Course.find({}).then(function (response) {
    res.json({
      courses: response,
    });
  });
});

module.exports = router;
