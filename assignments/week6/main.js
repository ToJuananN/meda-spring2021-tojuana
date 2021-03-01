// how to USE a function: functionName();
console.log("Hello World!");

console.log("Goodbye!");

var myFirstVariable;

// The Tree most common Datatypes

// Strings
myFirstVariable = "Hello World!";

console.log(myFirstVariable);

// Numbers
10;
3;
-1;
"10"; // Not a number, it is a string.

// Booleans
true;
false;

// Mathematical operators
10 + 10; // 20 Addition -> Sum
5 - 10; // -5 Subtraction ->
2 / 5; // .40 Division -> Quotient
10 * 5; // 50 Multiplication -> product
10 % 3; // Modulus -> Modulo

// 105 % 2 == 1;  ODD number
// 104 % 2 == 2;  EVAN number


var myMostImportantNumber = (50 - 10);
console.log(myMostImportantNumber);

var currentCTemp = 23;
var cToF = ((currentCTemp * (9/5)) + 32)

console.log(cToF);

// Logical Operators

// == Equal to
// === Is Equal to (Exactly)

// >, <, >=, <= Greater Than, Lesser Than, Greater Than or Equal to, Lesser Than or equal to

// Boolean Operation 

//"Not operator"
!false; // true
!true; // false

// || or Operator
 
(true || false); // true
(false || true); // true
(false || false); // false

// && and Operator
(true && false); // false
(true && true); // true


// Arrays & Objects

var myFirstArray = ["Important", "Not so Important"];

var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log(myFirstArray[0]);

console.log(daysOfWeek[4]);

daysOfWeek[7] = "Superday";

daysOfWeek[2] = "Whensday";
console.log(daysOfWeek);
 
// Array Function

// array.push() Adds the value to the END

myFirstArray.push("Hello");
console.log(myFirstArray);

// array.pop() Removes the value at the END
myFirstArray.pop();
console.log(myFirstArray);

// array.unshift() Add the value to the start
myFirstArray.unshift("Sunny day");
console.log(myFirstArray);

// array.shift Removes the value at the start
myFirstArray.shift();
console.log(myFirstArray);

//array.splice();

daysOfWeek.splice(3, 0, "Break Day");
console.log(daysOfWeek);

// Objects

var myFirstObject = {
    "firstName": "ToJuana",
    "job": "Student",
    "age": "30"
};

console.log(myFirstObject["job"]);
console.log(myFirstObject.job);

myFirstObject.favFood = "Cheese";
myFirstObject.age = null;
// Romoves the key-value pair from the object
delete myFirstObject.job;



console.log(myFirstObject);


console.log(typeof 1000);

// Conditional Statements. if statement need to have a true value in order to run/execute the code in its code block


if(true) {
    console.log("This was true");
    console.log("Everything worked well");
}

var numberToTest = -4;

if(numberToTest > 0) {
    console.log("This number is positive.");
} else {
    console.log("The number is NOT positive.");
}

if (numberToTest == 0) {
    console.log("This number is zero.");
} else {
    console.log("The number is NOT a zero.")
}

if (numberToTest < 0 ) {
    console.log("This number is negitive.");
} else {
    console.log("The number is NOT negative.")
}


var personAge;

personAge = 40;

var personLikesDrinking = true;


if (personAge >= 21 && personAge <= 25) {
    console.log("Congratz! You are of drinking age!");

    if (personLikesDrinking == true) {
        console.log("What alcholic drink do you like?");
    }

} else if (personAge >= 26 && personAge <= 40) {
    console.log("Do you want to go grab a beer?");
} else {
    console.log("Have you tried video games?");
}


// While Loop, CHECK FIRST if condition is true, if true THEN run code block.
var continueRunning = 0;

while (continueRunning < 10) {

    console.log("We ran the loop once!");

    continueRunning = continueRunning + 1;

    var count = 0

    // while (count < 10) {
    //     console.log("inner loop ran!");
    //     count = count + 1;

    // }
}

var personAnswer = "no";

// Do While Loop, runs code block FIRST, then checks the condition.
do {
    console.log("Ran one loop!");

    // alert("Congratulations you are the millionth visitor! Collect your prize free iPod.");

    personAnswer = prompt("Continue the loop?");
} while (personAnswer == "yes");


// For loop, "condition" area has THREE parts
// syntax: for (counter; condition; iterator) {}

for (var keepRunning = 0; keepRunning < 10; keepRunning = keepRunning + 2) {
    console.log("This for loop ran once!");
}


for (var i = 0; i < 10; i++) {


    // if (valueAlreadyFound == true) {
    //     // If the program ever hits this keyword, it will end the loop completely.
    //     break;
    // }


    // if (color == "red") {
    //     // if the program hits this keyword, it will end this specific iteration.
    //     continue;
    // }

    console.log("the color is blue");


}


// double plus, adds a 1 to the variable.
// double minus, removes a 1 from the variable.
// i++ is the same as i = i + 1

// .forEach(); A function for an array that go through each element of the array and does something with it.

var someArray = [10, 30, 40, 50];

someArray.forEach(function(arrayValue) {
    console.log(arrayValue + 100);
});


// function

function myFirstFunction() {
    console.log("Hello from first function!")
}

myFirstFunction();
myFirstFunction();
myFirstFunction();

// Parmeter(fancy name for Varable that belong to a functions) and Arguments(fancy name for the Value of a function)
// Paramenter are written within the parenthesis of the DEFINITION

function addTwoNumbers(firstNumber, secondNumber) {
    var total = firstNumber + secondNumber;

    console.log(total);
}
// Arguments are written within the parenthesis of the CALL
addTwoNumbers(10, 1);
addTwoNumbers(100, 2);
addTwoNumbers(-5,4);



// Returning values from 

// Concatenation (Fancy word for): combining two strings

function makeExciting(sentence) {
    var excitingSentence = sentence + "!!!";

    console.log(excitingSentence);

    return excitingSentence;
}

var savedSentence = makeExciting("How are you doing");
var savedSentence2 = makeExciting("Would you like some cake");

console.log(savedSentence);

// Example Function, 

function mathSummarizer(num1, num2) {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var differenceReversed = num2 - num1;
    var quotient = num1 / num2;
    var quotientReversed = num2 / num1;
    var product = num1 * num2

    /*return [sum, difference, differenceReversed, quotient, quotientReversed, product];*/

    var object = {
        sum: sum,
        difference: difference,
        differenceReversed: differenceReversed,
        quotient: quotient,
        quotientReversed: quotientReversed,
        product:product
    };
    return object;
}


function mathForMe(num1, num2) {
    var number1 = num1;
    var number2 = num2;
    var results = mathSummarizer(number1, number2);
    console.log(results);

    for (var keyName in results) {
    console.log("The " + keyName + " of  " + number1 + " and " + number2 + " is " + results[keyName]);

    }
    console.log(" ")
}

mathForMe(50, 100);

mathForMe(10, 20);

mathForMe(54, 254);

mathForMe(23,320);

/*var number1 = 9;
var number2 = 15;

var results = mathSummarizer(number1, number2);

console.log(results);

var sumSentence = "the sum of 9 and 15 is " + results["sum"];

console.log(sumSentence);

for (var keyName in results) {
 console.log("The " + keyName + " of  " + number1 + " and " + number2 + " is " + results[keyName]);
};*/
