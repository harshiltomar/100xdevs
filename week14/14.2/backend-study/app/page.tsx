import axios from "axios";

async function getUserData() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center ">
        <div className="border p-8 rounded-lg bg-slate-200">
          <h1>Name: {userData?.username}</h1>
          <h1>Email: {userData?.email}</h1>
        </div>
      </div>
    </div>
  );
}
