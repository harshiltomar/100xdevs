// Promise.all: takes an array of promises
Promise.all([p1, p2, p3]);
// return [result1, result2, result3]
//if one fails, we get ERROR. If one failes then the whole promise chain failes i.e. the whole chain fails

Promise.allSettled([p1, p2, p3]);
// if all success, after 3s -> r1,r2,r3
// if one fail, it will wait for all promises to settles
// Most safest option

Promise.race([p1, p2, p3]);
//As soon as any promise is returned, it will give you it's value
//Like a race, 123

Promise.any([p1, p2, p3]);
//success seeking but return result only when success
// if all return is fail, then return will be aggregator error [err1, err2, err3]

//Sample Code

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 3000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.settle([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
