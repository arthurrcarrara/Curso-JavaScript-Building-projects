//Lecture: LET and CONST

//ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';

// console.log(name5)

// //ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller'
// console.log(name6)


// //ES5
// function driverLicense(passedTest) {
    
//     if (passedTest) {

//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }

//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
// }

// driverLicense(true);

// //ES6
// function driverLicense(passedTest) {
    
//     let firstName;
//     const yearOfBirth = 1990;

//     if (passedTest) {
//         firstName = 'John';
        
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car')
// }

// driverLicense(true);


// let i = 23;

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

// console.log(i)


// //////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
// {
//     const a = 1;
//     let b = 2;
//      var c = 3
// }

// console.log(a + b)
//It cant access the variables(a and b), because of that block scope.
//console.log(c)
//It will be possible to access, once that 'VAR' has a global scope.


// //ES5
// (function() {
//     var c = 3;
// })();

// console.log(c)


////////////////////////////////////////////////
//Lecture: STRINGS

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calculateAge(year) {
//     return 2020 - year;
// }

// //ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '.Today he is ' + calculateAge(yearOfBirth) + ' years old.');

// //ES6 (Template Literals)
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calculateAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J')); //It verifys the string's start.
// console.log(n.endsWith('th')); //It verifys the string's end.
// console.log(n.includes(' ')); //It verifys if the string has it.
// console.log(`${firstName} `.repeat(5));

////////////////////////////////////////////////
//Lecture: ARROW FUNCTIONS

// const years = [1990, 1965, 1982, 1937];

// //ES5
// var age5 = years.map(function(el) {
//     return 2020 - el;
// });
// console.log(age5);


// //ES6
// let ages6 = years.map(el => 2020 - el);
// console.log(ages6)

// ages6 = years.map((el,index) => `Age element ${index + 1}: ${2020 - el}.`) //Only one line of code it allows to be written like this.
// console.log(ages6)
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });

// console.log(ages6)


////////////////////////////////////////////////
//Lecture: ARROW FUNCTIONS 2

//ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {

//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe();

//Here in this case, if we use "THIS" inside a function that belongs to a method, it will point towards global. So, it is possible to store in a variable in the method and then use inside the function. And that was the case why it was stored in 'SELF'.

//ES6
// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {

        
//         document.querySelector('.green').addEventListener('click', 
//         () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();

//So, this is box number one and it's green.So now, by using the arrow function,we really have access to the this keyword of this method here, because, again,the arrow function shares the lexical this keyword of its surroundings.


//!!!!!! BE CAREFUL WITH ARROW FUNCTIONS !!!!!!!!!!!!!!
// var box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {


//         document.querySelector('.green').addEventListener('click',
//         () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box66.clickMe();

// And now it says undefined again, and why is that?And it's actually very simple.
// And it's because this method here does now also share the lexical this keyword from its surroundings.
// And the surrounding of this is the global context, right? So this means that this method here also no longer has its own this keyword. So it shares the global this keyword,
// which, of course, points to the global object window.


// function Person(name) {
//     this.name = name;
// }

// ES5
// Person.prototype.myFriends5 = function(friends) {

//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark']

// new Person('John').myFriends5(friends);

//ES6

// Person.prototype.myFriends6 = function(friends) {

//     var arr = friends.map(el => 
//         `${this.name} is friends with  ${el}`);
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark']

// new Person('John').myFriends6(friends);
// new Person('Mike').myFriends6(friends);

//////////////////////////////////////////////////////////////////////////
////// Lecture: DESTRUCTURING 

// Destructuring gives us a very convenient way to extract data
// from a data structure like an object or an array.

//ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1]

//ES6
// const [name, age] = ['John', 26]
// console.log(name)
// console.log(age)

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };
// const { firstName, lastName } = obj;
// console.log(firstName)
// console.log(lastName)

// const {firstName: a, lastName: b} = obj;
// console.log(a)
// console.log(b)

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age)
// console.log(retirement)

/////////////////////////////////////////////////////////////////////////////
//// Lecture: ARRAYS

// const boxes = document.querySelectorAll('.box');

//ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue'
// })


//ES6
// var boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5

// for(var i = 0; i <boxesArr5.length; i++) {
//     if(boxesArr5[i].className === 'box blue') {
//         // continue;
//         break;
//     }

//     boxesArr5[i].textContent = 'I changed to blue'
// }

//ES6
// for (const cur of boxesArr6) {
//     if(cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = 'I changed to blue'
// }

// //ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//     return cur >= 18
// })
// console.log(full)

// console.log(full.indexOf(true))
// console.log(ages[full.indexOf(true)]);

//ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

////////////////////////////////////////////////////////////////
// Lecture: SPREAD OPERATOR

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }

// //ES5
// var sum1 = addFourAges(18,30,12,21)
// console.log(sum1)

// var ages = [18,30,12,21]
// var sum2 = addFourAges.apply(null,ages);

// console.log(sum2)

// //ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3)

// const familySmith = ['John', 'Jane', 'Mark']
// const familyMiller = ['Mary', 'Bob', 'Ann']
// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily)

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple')

////////////////////////////////////////////////////////////////
/// Lecture: REST PARAMETERS

//ES5
// function isFullAge5 (limit) {
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur){
//         console.log((2016 - cur) >= limit);
//     })
// }

// isFullAge5(21, 1990, 1999, 1965);

//ES6

// function isFullAge6 (limit,...years) {
//     years.forEach(cur => console.log((2016 - cur) >= limit));
// }
// isFullAge6(16, 1990, 1999, 1965, 2016, 1987);


////////////////////////////////////////////////////////////////////////
//Lecture: DEFAULT PARAMETERS


// //ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
//     lastName === undefined ? lastName = 'Smith' : lastName;

//     nationality === undefined ? nationality = 'american' : nationality = nationality; 
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')
// console.log(john)
// console.log(emily)

// //ES6
// function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearOfBirth = yearOfBirth;
//         this.nationality = nationality
// }


// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')
// console.log(john)
// console.log(emily)


//////////////////////////////////////////////////////////////////////
// Lecture: MAPS (HASH MAP)

// const question = new Map();
// question.set('question', 'What is the official name of the lateste major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer');
// question.set(false, 'Wrong please try again!');

// console.log(question.get('question'));
// console.log(question.size);

///////////////////////////////////////////////////////////////////////
// Lecture: CLASSES

//ES5

// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');
// console.log(john5)

// //ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');
// console.log(john6)

//SUBCLASSES

// //ES5
// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olymicGames = olymicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype)

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();


// //ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// class Athlete6 extends Person6 {
//     constructor (name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedals() {
//         this.medals++;
//         console.log(this.medals)
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10)

// johnAthlete6.wonMedals();
// johnAthlete6.calculateAge();

// CONSTRUCTORS

class Parks {
    constructor(name, buildYear, numberTrees, parkArea) {
        this.name = name;
        this.buildYear = buildYear;
        this.numberTrees = numberTrees;
        this.parkArea = parkArea;
        this.density = this.numberTrees / this.parkArea;
        this.age = 2020 - this.buildYear;
    }

    // calculateAge() {
    //     var age = Number(2020 - this.buildYear);
    //     return this.age;
    // }
}

class Streets {
    constructor(name, buildYear, streetLength, size){

        size === undefined ? size = 'normal' : size;

        this.name = name;
        this.buildYear = buildYear;
        this.streetLength = streetLength;
        this.size = size;
    }
}

//OBJECTS / ARRAYS
const elizabeth = new Parks ('Elizabeth Park', 1882, 1345, 120000);
const pacific = new Parks ('Pacific Park', 1998, 1232345, 5350);
const jericho = new Parks ('Jericho Park', 1008, 323, 3420);
const parks = new Array(elizabeth, pacific, jericho);

// PARKS FUNCTIONS
const allAges = parks.map(a => a.age).reduce(function(acumulador, atual){
    return acumulador + atual
});

const averageParksAges = allAges / 3;

const overHundredTrees = function() {
    var overTrees = 0;
    var overTreesParks = "";
    for( var i = 0; i < parks.length; i++){

            if( parks[i].numberTrees > 1000 && parks[i].numberTrees > overTrees ){

                overTrees = parks[i].numberTrees;
                overTreesParks = parks[i].name;

            };

    };
    console.log(`${overTreesParks} has more than 1000 trees.`);
};

const granville = new Streets ('Granville Street', 1972, 4.5, 'big');
const broadway =  new Streets ('Broadway Street', 1963, 10, 'huge');
const robson = new Streets ('Robson Street', 2001, 2, 'tiny');
const bute = new Streets('Bute Street', 1954, 3.5)
const streets = new Array(granville, broadway, robson, bute);

//STREETS FUNCTIONS

const streetLengthTotal = streets.map(a => a.streetLength).reduce(function(acumulador, atual){
    return acumulador + atual
});

const averageStreetLength = streetLengthTotal / streets.length;



// REPORT FUNCTIONS
function parksDensityReport() {
    for(var i = 0; i < parks.length; i++){
        console.log(`${parks[i].name} has a tree density of ${parks[i].density} trees per square km.`)
    }
};

function streetsReport() {
    for (var i = 0; i < streets.length; i++){
        console.log(`${streets[i].name}, built in ${streets[i].buildYear}, is a ${streets[i].size} street.`)
    }

};




//REPORTS
console.log('--------------- PARKS REPORT ------------------')
console.log(`Our ${parks.length} parks have an average of ${averageParksAges} years`)
console.log(`${parksDensityReport()}`)
console.log(`${overHundredTrees()}`)

console.log('--------------- STREETS REPORT ----------------')
console.log(`Our ${streets.length} have a total ${streetLengthTotal} km, with an average of ${averageStreetLength} km.`)
console.log(`${streetsReport()}`)

