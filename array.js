// Array

const numbers = [10,20,30,40,50];
console.log(numbers[0]);
console.log(numbers[6]);  // undefined

numbers[0] = 100; // array is const still we can change the existing values
console.log(numbers[0]);


// numbers = [200];   // new value can not be assigned bcz it is const
// console.log(numbers);

numbers.push(60);
numbers.push(70);

console.log(numbers);

// we can store non-homogenious elements in js array

const myArr = [2, true , "Waqar" , 'A' , 5.5];
myArr.push({age: 23});
console.log(myArr);

console.log(myArr.indexOf("Waqar"));
console.log(myArr.indexOf("Waq"));  // -1 means value does not exist

numbers.reverse()
console.log(numbers);
// pop function remove the value from the last of the array
myArr.pop()
console.log(myArr);


