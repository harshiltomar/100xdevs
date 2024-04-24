import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Harshil",
      email: "harshiltomar20@gmail.com",
      age: 22,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    include: {
      userPreference: true,
    },
  });

  console.log(user);
}

main();
