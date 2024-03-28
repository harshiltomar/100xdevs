//Exclude
// In a function that can accept several types of input but you want to exclude specific types from being passed to it

type Eventdummy = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Eventdummy, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK

// Type inference in zod

import { z } from "zod";
import express from "express";

const app = express();

//Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be atleast 18 years old" })
    .optional(),
});

app.put("/user", (req, res) => {
  const { success } = useProfileSchema.safeParse(req.body);
  const updateBody = req.body;

  if (!success) {
    res.status(411).json({});
    return;
  }

  //update db her
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
