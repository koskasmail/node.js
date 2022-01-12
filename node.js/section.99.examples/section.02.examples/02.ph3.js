let name = 'jron';
let age = 33;

const test () {

    function getDate() {

        console.log(this.name + " , " + this.age);
    }

}

test.getDAte();
