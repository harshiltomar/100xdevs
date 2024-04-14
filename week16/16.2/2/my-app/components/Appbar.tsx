"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </button>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>

      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;
