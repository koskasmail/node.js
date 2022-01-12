//// objects 

// const variable is a pointer to an address of an object
const student = {
    name: 'Jron',
    age: 44,
    display() {
        console.log('name:: ' + this.name);
    }
};

student.display();

// Add Element To Array
const hobbies = ['basketball','football'];
console.log(hobbies);

// Add Element To Array 
hobbies.push('tennis')
console.log(hobbies);