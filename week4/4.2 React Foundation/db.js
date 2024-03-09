const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

const CourseSchema = new mongoose.Schema({
  title: String,
  price: 5999,
});

const Course = mongoose.model("Course", CourseSchema);
