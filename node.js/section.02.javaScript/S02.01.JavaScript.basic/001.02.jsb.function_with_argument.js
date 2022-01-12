var fname = 'Jron';
var age = 33;
var hasHobbies = true;


function functionWithArgument(userName, userAge, userHobbies) {
    return 'Name: ' + userName 
        + ', Age: ' + userAge 
        + ', User Has Hobby: ' + userHobbies ;
}


console.log('functionWithArgument::');
console.log(functionWithArgument(fname, age, hasHobbies));
