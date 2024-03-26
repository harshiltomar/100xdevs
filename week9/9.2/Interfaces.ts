interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const user: User = {
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
};

function isLegal(user: User): boolean {
  if (user.age < 18) {
    return false;
  }

  return true;
}

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}
