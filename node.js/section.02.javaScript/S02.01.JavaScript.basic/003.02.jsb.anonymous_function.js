var fname = 'Jron';
var age = 33;
var hasHobbies = true;


// anonymous function //
const func = function (userName, userAge, userHobbies) {
    return 'Name: ' + userName 
        + ', Age: ' + userAge 
        + ', User Has Hobby: ' + userHobbies ;
}


// call function with argument//
console.log('functionWithArgument::');
console.log(func(fname, age, hasHobbies));

