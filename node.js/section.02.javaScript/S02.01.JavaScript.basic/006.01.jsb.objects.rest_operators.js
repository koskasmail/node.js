// rest operators - merge multiple arguments into an array 
//                  and use it in the argument list of a function

// immutability pattern -  create a new item/field in new object that have been duplicated from old object.

const person = {
    fName: 'jron',
    age: 44
}

const hobbies = ['Sport', 'Cooking']


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}
console.log(toArray(1,2,3));


// BUG 
console.log(toArray(1,2,3,4)); // 4 value/element will not enter the function.


// fix BUG with rest operators 
const AllArrayArgumentNeeded = (...args) => {
    return args;
}

console.log(AllArrayArgumentNeeded(1,2,3,4,5));


// fix BUG with rest operators 
const AllArrayArgumentNeeded2 = (...args) => {
    return [args];
}

console.log(AllArrayArgumentNeeded2(1,2,3,4,5));