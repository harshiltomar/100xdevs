"use client";
import { useSession } from "next-auth/react";

export default async function () {
  const session = await useSession();

  return <div>User Component: {JSON.stringify(session)}</div>;
}
