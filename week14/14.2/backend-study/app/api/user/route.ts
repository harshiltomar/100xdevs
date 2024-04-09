import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import client from "@/db/index";

export async function POST(req: NextRequest) {
  // return Response.json({
  //   username: "Harshil Tomar",
  //   email: "harshiltomar20@gmail.com, PUT",
  // });

  const body = await req.json();
  const user = await client.nextUser.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);
  return NextResponse.json({ message: "Signed up" });
}
