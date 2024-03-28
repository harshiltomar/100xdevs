const user = {
  name: "harshil",
  age: 21,
};

user.name = "harshiltomar";
console.log(user.name);

const a = [1, 2, 3];
//a = [2, 3, 4]; throws error
a[0] = 4;

const userName = "supriya";
//userName= "Supriya" throws error

//READONLY
type User = {
  readonly name: string;
  readonly age: number;
};

const userreaderexample: User = {
  name: "John Doe",
  age: 21,
};

// userreader.name="Hero" throws new error bcz it's a readonly property
//Another way is:

type UserReader = {
  name: string;
  age: number;
};

const userReaderexample: Readonly<User> = {
  name: "John",
  age: 21,
};

//good example is:
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

//config.apiKey= 'newkey' throws error, cannot assign to 'apiKey' bcz it is a read-only property.
// This ensures that any dev by mistake does not end of changing or diturbing the api key

// RECORD'S AND MAP

//RECORD let's you give cleaner tye to objects
interface User123 {
  id: string;
  name: string;
}

type Users = { [key: string]: User123 };

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "John Doe" },
};

//MAP give you even fancier way to deal with objects. Very similar to Maps in C++
interface UserMap {
  id: string;
  name: string;
}

// Initialize a empty Map
const dummyUser = new Map<string, UserMap>();

// Add users to the map
dummyUser.set("abc123", { id: "abc123", name: "John Doe" });
dummyUser.set("xyz789", { id: "xyz789", name: "John Doe" });

//Accessing a vlue using .get
console.log(dummyUser.get("abc123"));
