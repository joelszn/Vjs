/**********************************
var firstName = 'Joel';
console.log(firstName);

var lastName = 'Duran';
var age = 20;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Painter"
console.log(job);
*/

//type coercion
/**********************************

var firstName = 'Joel';
var age = 20;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'dev';
isMarried = false;

console.log(firstName + ' is a ' +  age + ' year old ' + job + '. Is he married? ' + isMarried);

//var mutation
age = 'twenty';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
/**********************************
Basic Ops
*/

/*
var year, yearJoel, yearRaymond;
year = 2018;
yearJoel = year -21;
yearRaymoond = year -23;
console.log(yearJoel);
console.log(yearRaymond);
*/


/**********************************
*Coding Challenge #1 Solution
*/

/*
var markMass, markH, johnMass, johnH;

markMass =70;
markH = 1.5;
johnMass = 65;
johnH = 1.7;

var mBmi = markMass / Math.pow(markH, 2);
var jBmi = johnMass / Math.pow(johnH, 2);
console.log(mBmi, jBmi);
var isMark = mBmi > jBmi;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMark);
*/

/**********************************
*Ternary Op
*/

/*
var firstName = 'Joel';
var age = 20;

age >=21 ? console.log('drinks beer') : console.log('drinks juice');
*/

/**********************************
*switch statements
*/

/*
var jS1, jS2, jS3, mS1, mS2, mS3, jAvg, mAvg;

var mary1, mary2, mary3, maryAvg;

jS1 = 89;
jS2 = 120;
jS3 = 103;

mS1 = 116;
mS2 = 94;
mS3 = 123;

mary1 = 97;
mary2 = 134;
mary3 = 105;

jAvg = (jS1 + jS2 + jS3) / 3;
mAvg = (mS1 + mS2 + mS3) / 3;
maryAvg = (mary1 + mary2 + mary3) / 3;

if (jAvg > mAvg && jAvg > maryAvg) {
    console.log('John avg is higher');
} else if (mAvg > maryAvg) {
    console.log('Mark avg is higher');
} else {
    console.log('Mary avg is higher');
}


*/




/**********************************
*functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}


var ageJoel = calculateAge(1997);
var ageRay = calculateAge(1971);
var ageLi = calculateAge(1967);

console.log(ageJoel, ageRay, ageLi);


function yearsUntilRetirement(year, firsName) {
    var age = calculateAge(year), retirement = 65 - age;
    console.log(firsName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1997, 'Joel');
yearsUntilRetirement(1971, 'Pat');
yearsUntilRetirement(1967, 'Yova');

*/

/**********************************
*function statements & expression
*/

/*
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName +  ' is an awesome teacher';
        case 'driver':
            return firstName + ' is raymond'
        case 'designer':
            return firstName + ' is a dope designer';
        default :
            return firstName + ' does something else';
    }
    console.log(whatDoYouDo('designer', 'migs'));
}
*/

/**********************************
*arrays
*/

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1999, 2001);

console.log(names);
console.log(names.length);
console.log(names[2]);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop(); // deletes last element
john.shift(); // deletes first element
console.log(john);

console.log(john.indexOf('John'));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a Designer';

console.log(isDesigner);
*/

/**********************************
*code challenge 3
*/

/*
var tip, total;
function calculateTip (total) {
    if (total < 50) {
        tip = total * 0.20;
//        total = tip + total;
        return tip;
    } else if (total > 50 && total < 200) {
        tip = total * 0.15;
//        total = tip + total;
        return tip;
    } else {
        tip = total * 0.10;
//        total = tip + total;
        return tip;
    }
}

var arr1, arr2;
//
//arr1 = [calculateTip(100), calculateTip(50), calculateTip(300)];
//console.log('Array of tips ' + arr1);
//
//arr2  = [(calculateTip(100) + 100), (calculateTip(50) + 50), (calculateTip(300) + 300)];
//console.log('Array of totals ' + arr2);

arr1 = [100, 50, 300];
arr2 = [calculateTip(arr1[0]) + arr1[0], 
       calculateTip(arr1[1]) + arr1[1],
       calculateTip(arr1[2]) + arr1[2]
       ];
console.log(arr1,arr2);

*/

/**********************************
*Objects & properties
*/
/*
var joel = {
    firstName: 'Joel',
    lastName: 'Duran',
    birthYear: 1997,
    family: ['Ray', 'JD', 'Jay'],
    job: 'dev',
    isMarried: false
};

console.log(joel.firstName);
console.log(joel['lastName']);

joel.job = 'creator';
joel['isMarried'] = true;
console.log(joel);

// new obj
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************************
*Objects & methods
*/

/*
var joel = {
    firstName: 'Joel',
    lastName: 'Duran',
    birthYear: 1997,
    family: ['Ray', 'JD', 'Jay'],
    job: 'dev',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

joel.calcAge();
console.log(joel);

*/

/**********************************
*Coding challenge 4
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Legend',
    mass: 70,
    height: 1.7,
    calcBMI: function() {
    return this.mass / (this.height * this.height);
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Legend',
    mass: 75,
    height: 1.5,
    calcBMI: function() {
    return this.mass / (this.height * this.height);
    }
};

if(john.calcBMI === mark.calcBMI){
    console.log('BMI\'s are equivalent');
} else if (john.calcBMI > mark.calcBMI) {
        console.log('John\'s is greater');

} else {
    console.log('Mark\'s is greater');
}

*/

/**********************************
* Loops & iterations
*/

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var joel = ['Joel', 'Duran', 1997, 'student', false];

for (var i = 0; i < joel.length; i++) {
    console.log(joel[i]);
}


var i = 0;
while(i < joel.length) {
    console.log(joel[i]);
    i++;
}

*/
/*
// continue and break statemenst
var joel = ['Joel', 'Duran', 1997, 'student', false];
for (var i = joel.length-1; i >=0; i--) {
   // if(typeof joel[i] !== 'string') continue;
    console.log(joel[i]);
}

//for (var i = 0; i < joel.length; i++) {
//    if(typeof joel[i] !== 'string') break;
//    console.log(joel[i]);
//}


// looping backwards

//for(var i = )
*/


/**********************************
* Coding Challenge 5
*/



var john = {
    fullName: 'Joel Duran',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            // percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                // 20%
                percentage = .2;
            } else if (bill > 50 && bill < 200) {
                // 15%
                percentage = .15;
            
            } else {
                // 10%
                percentage = .1;
            }
            
            // add the result to corresponding arr
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        }
    }
};




var mark = {
    fullName: 'Mark Duran',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            // percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                // 20%
                percentage = .2;
            } else if (bill > 100 && bill < 300) {
                // 10%
                percentage = .1;
            
            } else {
                // 25%
                percentage = .25;
            }
            
            // add the result to corresponding arr
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        }
    }
};


function calcAvg(tips) {
    var avg = 0;
    for ( var i = 0; i < tips.length; i++) {
        avg = avg + tips[i];
    }
    return avg / tips.length;
}

john.calcTips();
mark.calcTips();
console.log(john, mark);

john.avg = calcAvg(john.tips);
mark.avg = calcAvg(mark.tips);

if (john.avg > mark.avg) {
    console.log('John\'s avg is higher');
} else if (mark.avg > john.avg) {
        console.log('Mark\'s avg is higher');
} else {
        console.log('Avg\'s are equal');

}



