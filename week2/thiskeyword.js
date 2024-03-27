// This in global space

console.log(this); // global, in browser -> window

// This inside a function

function x() {
  // Value depends on strict / non strict mode
  console.log(this);
}
x();

// If the val of 'this' keyword is undefined or null, this will be replaced with global object

// This in strict mode
x();
window.x();

// This value depends on how this is called (window)

// This inisde a object's method

// Call Apply Bing methods (sharing methods)

// This inside arrow functions

// This inside nesed arrow functions

// This inside DOM
