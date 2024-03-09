//CREATE

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

//READ

User.findById("1");
User.findOne({
  email: "harshiltomar20@gmail.com",
});
User.find({
  email: "harshiltomar20@gmail.com",
});

//UPDATE

User.updateOne({ id: "1" }, { $push: { purchasedCourses: courseId } });

//DELETE
User.deleteMany({});

User.deleteOne({
  email: "harshiltomar20@gmail.com",
});
