const cart = ["shoes", "laptop", "mouse"];

// const cartitems = ["shoes", "laptop", "mouse"];

// api.createOrder(cartitems, function () {
//   //
//   api.proceedToPayment(orderitems, function () {
//     //
//     api.showOrderSummary(transactioninfo, function () {
//       //
//       api.updateWallet();
//     });
//   });
// });

// console.log("Newgen");

// setTimeout(function () {
//   console.log("Javscript");
// }, 5000);

// console.log("Season 2");

// const promise = createOrder(cart);
// //gives data of orderdetails having orderId

// promise.then(function (orderId) {
//   proceedtoPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/harshiltomar";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentinfo) {
//     return paymentBill(paymentinfo);
//   })
//   .then(function () {
//     return updateWallet();
//   });

createOrder(cart); //returns OrderId
proceedToPayment(orderId);

function validateCart(cart) {
  return true;
}

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // create Order, validate Order, return orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid!");
      reject(err);
    }

    //logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      //resolve(orderId);
    }
  });

  return promise;
}

function proceedToPayment(orderId) {
  //
  return new Promise(function (resolve, reject) {
    resolve("Payment succeddfull !");
  });
}

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    proceedToPayment(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  });

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    proceedToPayment(orderId);
    return orderId;
  })
  .then(function () {
    return proceedToPayment(orderId);
  })
  .then(function () {
    updateWallet();
  })
  .catch(function (err) {
    console.log(err.message);
  });
