// const jwt = require("jsonwebtoken");

// const value = {
//   name: "harshil",
//   accNo: 123123123,
// };

// const token = jwt.sign(value, "secret");
// console.log(token);

// //Token generated via using secret, and hence can only be verified using this secret

// // try {
// // } catch (error) {}

// function getLength(name) {
//   return name.length;
// }

// try {
//   const ans = getLength();
//   console.log(ans);
// } catch (e) {}

// console.log("Hi There");

//Ass-1

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign({ username }, jwtPassword);

  return signature;
}

function verifyJwt(username, password) {
  const verified = jwt.verify(token, jwtPassword);

  if (verified) {
    return true;
  } else {
    return false;
  }
}

function decodeJwt(token) {
  //T,F
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
