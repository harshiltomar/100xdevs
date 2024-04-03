import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(todo);
}

createTodo(1, "go to gym", "push day");

async function getTodos(userId: number) {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });

  console.log(todos);
}

getTodos(1);

async function getTodosAndUserDetails(userId: number) {
  const todos = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
}

getTodosAndUserDetails(1);
// prisma.user.findMany();
// //SELECT * FROM USER

// async function insertUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   //
//   const response = prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//     },
//   });
//   console.log(response);
// }

// async function getUser(username: string) {
//   const user = await prisma.user.findFirst({
//     where: {
//       username: username,
//     },
//   });

//   console.log(user);
// }

// insertUser("harshil", "blehbleh", "1", "2");

/*
    app.get("/user", (req,res)=> {
        Todo.find({
            where: {
                id: req.query.id
            }
        })
    })
 */
