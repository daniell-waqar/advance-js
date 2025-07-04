
// High order function & Callback

// High order : A function that takes a function as an argument

function add(a , b , callback){
    let res = a + b;
    callback(res);
}

add(2,3,function (val){
    console.log(val);
});


add(2,3, (val) => console.log(val));

// we can return a function from a function 
function addNumbers(a , b , callback){
    let res = a + b;
    // callback(res);
    return () => console.log(res);
}

let functionReturned = addNumbers(4,6 , () => {}) // here callback function is empty
functionReturned();
