type User = {
  firstName: string;
  lastName: string;
  age: number;
};

type StringId = string | number;

function printId(id: StringId) {
  console.log(`ID: ${id}`);
}

printId(101);
printId("202");

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const harshil: TeamLead = {
  name: "harshil",
  startDate: new Date(),
  department: "Software CTO",
};

function filteredUsers(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "harkirat",
      lastName: "Singh",
      age: 21,
    },
    {
      firstName: "Raman",
      lastName: "Singh",
      age: 16,
    },
  ])
);
