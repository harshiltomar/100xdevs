type keyInput = "up" | "down" | "left" | "right";

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function Consolekrdo(keyPressed: Direction) {
  console.log("key pressed:", keyPressed);
}

Consolekrdo(Direction.Up);

//Express usecase

const app = express();

enum ResponseStatus {
  Success = 200,
  Notfound = 404,
  Error = 500,
}

app.get("/", (req, res) => {
  if (!req.query.userId) {
    res.status(ResponseStatus.Error).json({});
  }

  // end
  res.status(ResponseStatus.Success).json({});
});

// type Input = number | string;

// function firstEl(arr: Input[]) {
//   return arr[0];
// }

// const val = firstEl(["harshil", "tomar"]);
// console.log(val.toUpperCase());

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

//NEW SOLUTION

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement<string>(["harshil", "tomar"]);
const el2 = getFirstElement<number>([1, 2, 3]);
console.log(el.toUpperCase);
