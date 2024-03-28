interface User {
  name: string;
  age: number;
}

interface newUser {
  id: string;
  name: string;
  age: number;
  email: string;
  passwords: string;
}

// interface UpdateProps {
//   name: string;
//   age: number;
//   password: string;
// }

function updateUser(updatedProps: UpdatePropsOptional) {
  //hit the database to update the user
}

// app.put(route, (req,res)=> {
//   const updatedProps= req.body;
// })

// Allows you to create a new type by selecting a set of properties (Keys) from an existing type(Type)
type UpdateProps = Pick<newUser, "name" | "age" | "email">;

// I want to partially select values from UpdateProps
type UpdatePropsOptional = Partial<UpdateProps>;

const user: newUser = newUser.findOne({
  where: { email: "harshil@gmail.com" },
});
updateUser({
  name: "asd",
  age: 21,
  email: "harshil20@gmail.com",
});

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

//Example useage
const result = sumOfAge(
  {
    name: "harshil",
    age: 20,
  },
  {
    name: "tomar",
    age: 20,
  }
);

console.log(result);

//Partial - maked all properties of a type optional
// interface PartialDummy {
//   name?: string;
//   email?: string;
//   image?: string;
// }
