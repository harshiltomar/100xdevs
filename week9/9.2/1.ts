// const x: number = 1;
// console.log(x);

function greet(firstName: string) {
  console.log("Hello" + firstName);
}

greet("Harshil");

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isLegal(age: number): boolean {
  if (age < 18) {
    return false;
  }

  return true;
}

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("Hello Delay of 1 second");
});
