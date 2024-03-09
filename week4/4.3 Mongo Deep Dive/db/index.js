const mongoose = require("mongoose");

mongoose.connect("mongodb url vro");

const AdminSchema = new mongoose.Schema({
  //Schema
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  //Schema
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  //Schema
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
