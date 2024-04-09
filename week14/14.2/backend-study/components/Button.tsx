"use client";

import axios from "axios";

export default function Button({ username, password }: ButtonInputType) {
  async function Handler() {
    const response = await axios.post("http://localhost:3000/api/user", {
      username: username,
      password: password,
    });
  }
  //
  return (
    <button
      onClick={Handler}
      type="button"
      className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      Sign In
    </button>
  );
}

interface ButtonInputType {
  username: string;
  password: string;
}
