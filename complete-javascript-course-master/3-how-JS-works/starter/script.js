///////////////////////////////////////
// Lecture: Hoisting


//calculateAge(1997);
//
//
//function calculateAge(year) {
//    console.log(2018 - year);
//}

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}

*/

///////////////////////////////////////
// Lecture: The this keyword


// console.log(this); // window obj is the default obj
/*
calculateAge(1997);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1997,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);
        /*
        function innerFunc() {
            console.log(this);
        }
        innerFunc();
        */
    }
}

john.calculateAge();



var mike = {
    name: 'Mike',
    yearOfBirth: 1996,
    
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();

















