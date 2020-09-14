///////////////////////////////////////
// Lecture: Hoisting

//-Function declaration: It's stored as object before getting executed, so it doesn't matter the sequence.
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

//- Function expression: In this case, it needs to be called after the declaration of the function expression to work properly.

//retirement(1990)

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990)


//Variables: In the creation fase, variables are defined as undefined. As matter of fact, you wont be able access before declaring it.

//console.log(age) - LIKE THIS.
var age = 23;
console.log(age); //PROPER WAY.

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // It will return 23, because it's been stored as global, meanwhile in "foo()", age will have its value as 23.







///////////////////////////////////////
// Lecture: Scoping

//- Every function creates a new scope which the variables it defines are acessible.

// - Lexical Scoping: a function the is lexically within another function get access to the scope of the outer function.


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
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// In this case below, "this" is poiting towards global scope, once that is the object.
// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

//Now, it has an object, so it changes its scope towards the object the new object "John".
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
    /*
    function innerFunction() {
        console.log(this);
        //In this case, "this" will point towards global.
    }
    innerFunction();
    */
    }

}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();



