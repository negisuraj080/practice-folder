
// let obj1 = {
//     a:10,
//     b:20,
//     c:{
//         d:90
//     }
// };
// let obj2 = {...obj1};
// console.log(obj1);

// obj2.a = 90;
// console.log(obj2);

// obj2.c.d = 100;


//3rd method is JSON.stringify and JSON.parse
// let obj1 = {
//     a:10,
//     b:20,
//     c:{
//         d:90
//     }
// }

// const str = JSON.stringify(obj1);
// console.log(str);

// const obj2 = JSON.parse(str);
// console.log(obj2);

// obj2.c.d = 100;


//use of callback functions
// setTimeout(function(){
//     console.log("timer");
// },5000);

// function x(y){
//     console.log('x');
//     y();
// }

// x(function y(){
//     console.log("y");
// });


// function attachEventListeners(){
// let count = 0;
// document.getElementById("click").addEventListener("click",function xyz(){
//     console.log("button clicked",++count);
// });
// }

// attachEventListeners();


// function outerFunction() {
//     let outerVariable = 'I am from outerFunction';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   // Creating a closure by calling outerFunction and assigning its result to a variable
//   let closure = outerFunction();
  
//   // Calling the closure, which still has access to outerVariable
//   closure(); // Output: I am from outerFunction
  


// let arr = [1,2,3,4,19];
// const output = arr.filter((item) => {
//     return true;
// });
// console.log(output);



delete Function.prototype.call;

Function.prototype.call = function(obj, ...restParam){

obj.tempFn = this;
const result = obj.tempFn(...restParam);
return result;
}

var nam = "rahul";

let obj = {
    nam = "prikshit";
}

function intro(workplace,city){
    console.log(
        "my name is" + this.nam + "I work at" + workplace + "I live in" + city
    )
};
console.log(obj);

intro.call(obj,"walmart",blr);

console.log(obj);

