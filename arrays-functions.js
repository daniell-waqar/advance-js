// Arrays High order functions 

numbers = [1,2,3,4,5,6];

function printNums(n) {
    let add_two = n + 2
    console.log(add_two);
}

numbers.forEach(printNums);  // forEach is High order function
console.log("---------------------------")

numbers.forEach( (val) => console.log(val));



// ForEach is used to print the numbers in the array but it does not return values of the array
// if we need new array with double values of each item then we go for map function

 const newArr = numbers.map( (val) => {
     return val * 2;
 });
 
 console.log(newArr);
 
 numbers.find((num) => num == 2)
 const index = numbers.findIndex((num) => num == 2)
 console.log(index)
 
 
 const evenArr = numbers.filter( (num) => num % 2 === 0)
 console.log(evenArr);
 
const sliceArr = numbers.slice( 3)   //numbers.slice( 1 , 3)
 console.log(sliceArr);

// splice function basically remove the element and put them in new arrray so when we print original array that element doesn't exist
const removedArr = numbers.splice(1 , 4)
 console.log(removedArr);
  console.log(numbers);




