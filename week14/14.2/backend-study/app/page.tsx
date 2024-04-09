import client from "@/db/index";

async function getUserData() {
  try {
    const user = await client.nextUser.findFirst({});
    return {
      name: user?.username,
      password: user?.password,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center ">
        <div className="border p-8 rounded-lg bg-slate-200">
          <h1>Name: {userData?.name}</h1>
          <h1>Pass: {userData?.password}</h1>
        </div>
      </div>
    </div>
  );
}
