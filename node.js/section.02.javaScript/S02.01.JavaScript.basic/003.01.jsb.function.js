var fname = 'Jron';
var age = 33;
var hasHobbies = true;


// function with argument//
function fnc(userName, userAge, userHobbies) {
    return 'Name: ' + userName 
        + ', Age: ' + userAge 
        + ', User Has Hobby: ' + userHobbies ;
}


// call function with argument//
console.log('functionWithArgument::');
console.log(fnc(fname, age, hasHobbies));

