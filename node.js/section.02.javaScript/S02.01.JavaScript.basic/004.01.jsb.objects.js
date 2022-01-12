//// objects
const student = {
    name: 'Jron',
    age: 44,
    fnArrowFunction: () => {
        console.log("fnArrowFunction:: Hi, i am Function Array List");
    },
    fnOldStyle : function() {
        console.log('fnOldStyle:: ' + this.age);
    },
    fnNewStyle() {
        console.log('fnNewStyle:: ' + this.name);
    }
};

// console.log(student);

student.fnArrowFunction();
student.fnOldStyle();
student.fnNewStyle();
