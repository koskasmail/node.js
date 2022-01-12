// spread operators - pull element/argument property out of the array/object

// immutability pattern -  create a new item/field in new object that have been duplicated from old object.

const person = {
    fName: 'jron',
    age: 44
}

const hobbies = ['Sport', 'Cooking']

hobbies.push('programming');
console.log(hobbies);


const copiedArray = hobbies.slice();
console.log(copiedArray);

// slice element 1 in the array
const copiedSomeArray = hobbies.slice(1); 
console.log(copiedSomeArray);


// slice element 2 in the array
const copiedSomeArray2 = hobbies.slice(1,3);  //from 2 - to 2
console.log(copiedSomeArray2);

// array inside array "nested array"
const copiedArray2 = [hobbies];
console.log(copiedArray2)

// spread operators (Array) - cut elements from old array to new array 
const spreadOperators = [...hobbies];
console.log(spreadOperators);

// spread operators (object)
const spreadOperators2 = {...person};
console.log(spreadOperators2);
