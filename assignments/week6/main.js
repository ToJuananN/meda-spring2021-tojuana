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

var numberToTest = 0;

if(numberToTest < 0) {
    console.log("This number is positive.");
}

if (numberToTest == 0) {
    console.log("This number is zero.");
}

if (numberToTest > 0 ) {
    console.log("This number is negitive.");
}