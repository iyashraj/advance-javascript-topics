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
function test(){
    console.log(this)
}
test()
// conslusion : If we're using "this" keyword inside the function, 
// it will return the same window object but when non-strict mode.

// (b) in strict mode
    "use strict"
    function test2(){
        console.log(this)
    }
    test2()
// conclusion : it winll return undefined

// final conslusion : If the value of "this" keyword inside the function
// is undefined or null, then it will replaced with globalObject only 
// in non-strict mode, also known as "'This Substitution", otherwise it 
// will retrun the return undefined

// if the function is calls without any reference then it's value is 
// undefined in strict mode, but if you refer something it will give you result accordingly.
 "use strict"
 test() // undefined
 window.test() // refer to global/window object