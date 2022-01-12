//// short arrow function
const add = (a,b) => {
    return a + b;
}
console.log(add(5,10));


//// shorter arrow function
const add2 = (a,b) => a + b;
console.log(add2(3,5));


const add3 = (a) => a + 1;
console.log(add3(3));


// one argument only
const add4 = a => a + 1;
console.log(add4(4));


//arrow without argument
const addFree = () => 1 + 5;
console.log(addFree());


//arrow without argument
const hand = () => "Have A Nice Day !";
console.log(hand());
