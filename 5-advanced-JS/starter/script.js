// //Function constructor
// //It's a blueprint constructor for objects

// var john = {
//     name: 'John',
//     yearOfBirth:1990,
//     job: 'teacher'
// };

// var Person = function( name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job

// }

// Person.prototype.calculateAge =
// function() {
//     console.log(2020 - this.yearOfBirth);
// };
// //Here it allow all objects created by "PERSON" to have acess to the function "calculateAge", however it won't be added to the constructor(PERSON), you only will have acesses to it.

// Person.prototype.lastName = 'Smith'
// //As you can see it, all objects created by the constructor will have the 'SMITH' inheritance.

// var john = new Person('John', 1990, 'teacher');

// // "NEW" creates a brand new empty object.
// // It helps to point the variable towards the new object, instead of pointing to GLOBAL scope.
// var jane = new Person('Mark', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);



//--> Object.create
// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto)
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer'}
// })

// PRIMITIVES VS OBJECTS

//So variables containing PRIMITIVES actually hold that data of the variable ifself.

//Variables holding OBJECTS do not actually contain that data. They contain a memory where data is stored. It only points to the address where it is stored.

//-->PRIMITIVES
// var a = 23;
// var b = a;
// a = 46;

// console.log(a)
// console.log(b)

//-->OBJECTS
//In the following example, It's possible to understand that we created to references to the same exactly memory address.
//Even though we have created "OBJ1" e "OBJ2", they are the same object because the have the same memory address.
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);


//-->FUNCTION
//So this shows us

// So this shows us that when we pass a primitive into the function
// a simple copy is created,
// so we can change A as much as we want,
// it will never affect the variable on the outside
// because it is a primitive.
// But when we pass the object
// it's not really the object that we pass,
// but the reference to the object, okay.
// So again we do not pass an object into a function,
// but only the reference that points to the object.
// So when we then change the object inside of the function
// it is still reflected outside of the function.
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city)



//////////////////////////////////////////////////////////////
//Lecture: Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// //Generic Function
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// //Callback Functions
// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if ( el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// //Storing in variables
// var ages = arrayCalc(years, calculateAge);

// var fullAges = arrayCalc(years, isFullAge);

// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages)
// console.log(rates)

//////////////////////////////////////////////
//LECTURE: FUNCTIONS RETURNING FUNCTIONS

// function interviewQuestion(job) {
//     if ( job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if ( job === 'teacher' ) {
//         return function(name) {
//             console.log('What subject do you teach,' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ',what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

///////////////////////////////////////////////////////
//Lecture: IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function (goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


////////////////////////////////////////////////
//Lecture: CLOSURES

//An inner function has always access to the variables
//and parameters of its outer function, even after the outer
//function has returned.

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);
//retirement(66)(1990)




// function interviewQuestion(job) {
//     return function(name) {
//         if ( job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if ( job === 'teacher' ) {
//             console.log('What subject do you teach,' + name + '?');
//         } else {
//             console.log('Hello ' + name + ',what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('John')


//////////////////////////////////////////////////////////////
///Lecture: BIND, CALL and APPLY

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if(style === 'formal'){
//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m '+ this.name +', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up?I\'m '+ this.name +', I\'m a' + this.job + 'and I\'m ' + this.age + ' years old.' );
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning')
// //You can use 'CALL' to borrow the method from a different object.
// john.presentation.call(emily, 'friendly', 'afternoon')

// //'BIND'  allows us to create a copy of a function
// // with a preset argument

// var johnFriendly = john.presentation.bind(john, 'friendly')

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily,'formal');
// emilyFormal('night');

var years = [1990, 1965, 1937, 2005, 1998];

//Generic Function
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//Callback Functions
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages);
console.log(fullJapan);