// Normal Function & Arrow function 

function  sayHello() {
    console.log("Hello");
}

const sayHi = () => {
    console.log("Heyyy");
}

const add = (a,b) => a + b; // one liner function 

const addNumbers = (...args) =>{
    console.log(args)
}

sayHello()
let res = add(2,3);
console.log("Addition :" , res);

addNumbers(2,3,4,5);


// Hoisting 

// we can access / call our normal function before defining it! 
greetUser("Waqar");

function greetUser(name){
    console.log("Hi! " , name , "Welcome to the world of JS");
}

// not allowed in arrow function 
// greet("Waqar");
// const greet = () =>{
//       console.log("Hi! " , name);
//}

// This keyword 
// suppose we have an object and inside object we have a normal function and 
// that function is using this keyword to access a value it works fine while
// in arrow function this keyword is referencing to the entire window (wierd)

const obj = {
    value : 10,
    myFun : function (){
        console.log(this.value);
    }
    
}

// const obj = {
//     value : 10,
//     myFun : () => {
//         console.log(this.value);
//     }
    
// }

obj.myFun();




