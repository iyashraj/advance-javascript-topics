// "This" keywords behaves differently in different kind of secenarios.
// We'll discuss each and every scenario that what javascript return in "this" keyword.

// *********** Secenarios ***********

// 1.) "This" inside global scope
console.log(this); // globalObject - window, global
//   conclusion : inside the global scope, "this" keyword refers to the window/global
// object where JS environment is running. It will vary where you're calling
// "this" keyword eg. Mobile,Browser, SmartWatch or any kind of environment.

// 2.) "This" inside a function
// (a) in non strict mode
function test() {
  console.log(this);
}
test();
// conslusion : If we're using "this" keyword inside the function,
// it will return the same window object but when non-strict mode.

// (b) in strict mode
//"use strict"
function test2() {
  console.log(this);
}
test2();
// conclusion : it winll return undefined

// final conslusion : If the value of "this" keyword inside the function
// is undefined or null, then it will replaced with globalObject only
// in non-strict mode, also known as "'This Substitution", otherwise it
// will retrun the return undefined

// if the function is calls without any reference then it's value is
// undefined in strict mode, but if you refer something it will give you result accordingly.
test(); // undefined
//  window.test() // refer to global/window object

// 3.) this inside the object's method

const student = {
  name: "yash",
  printName: function () {
    console.log(this);
  },
};

student.printName();

// conslusion : inside object's method "this" will refer the object

// 4.) call/apply/bind methods (sharing methods)

const student2 = {
  name: "Shubham",
};

student.printName.call(student2); // this will refer student2

// 5.) this inside the arrow function
// case 1
const obj = {
  name: "Yash",
  funcName: () => {
    console.log(this);
  },
};

obj.funcName();

// in arrow  function "this" will refer to enclosing lexical function and in this example lexical scope is global object, so this will give globalObject as window

// case 2
const obj2 = {
  name: "Yash",
  funcName: function () {
    // enclosing lexical scope
    const y = () => {
      console.log(this.name);
    };
    y();
  },
};

obj2.funcName();
// in case 2, arrow function's enclosing lexical scope is "obj2" object, so in this, "this" will refer to obj2

// 6.) this inside the HTML element
// suppose we have a button and on click event, you're consoling "this", then it will refer HTMLelement/HTMLDomElement


// this is for "this", we'll defenitely solve some tricky question on "this" keyword.



// ******************************** Happy Coding ********************************