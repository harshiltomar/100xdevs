const p = new Promise((resolve, reject) => {
  resolve("Promise has been Resolved");
});

async function getData() {
  //async fn will always return a promise
  return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
