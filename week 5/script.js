let a = 100;
let b = 25;
let c = a + b;

function add(val1, val2) {
  let sum = val1 + val2;
  console.log(sum);
  return sum;
}

function subtract(val1, val2) {
  let res = val1 - val2;
  console.log(res);
  // console.log(sum);
  return res;
}

function whatIsMyGrade(marks) {
  if (marks < 40) {
    // console.log("sorry you failed");
    return "failed";
  } else if (marks > 80) {
    // console.log("you got HD");
    return "HD";
  } else {
    return "pass";
  }
}

let myMarks = 34;
let myGrade = whatIsMyGrade(myMarks);

let total = add(10, 20);
console.log(total);
total = add(a, b);
console.log(total);

// add(23,34);
// add(100,134);
// let c = a + b;
// console.log(c);
// a = 23;
// b = 17;
// c = a + b;
// console.log(c);

let grade = 40;
if (grade > 75) {
  // console.log("Yey! You got a distinction");
} else {
  // console.log("You just passed the course!");
}

let studentArray = ["pitbull", "mr worldwide", "mr 305"];
// console.log ("hello", studentArray[0]);
// console.loh ("hello", studentArray[1]);
for (let i = 0; i < studentArray.length; i++) {
  console.log("HELLO", studentArray[i]);
}

// string variables use quotes
let myName = "pitbull";
let myID = 12345;
let myNewName = "melbourne";
let myCity = "perth";

// number variables
let num = 10;
let num2 = parseInt("20");
let sum = num + num2;
console.log("total is", sum);
// + for addition as well as joining text together variable must have a ""
// - for subtraction
// * for multiplication
// / for division

// == equal to
// === equal value and equal type (for comparison)
// != not equal
// !== not equal value or equal type
const weather = "rainy";
const grade = 75;

if (grade >= 75) {
  console.log("I got Distinction");
} else {
  console.log("I just passed the score");
}
if (weather === "sunny") {
  console.log("today is sunny weather");
} else {
  console.log("too bad no sun today");
}

//const weather = "sunny";
const msg = `<h1> Today's weather is ${weather}
<p> this is so nice to see the sun again </p>

</h1>`;
console.log(msg);

//boolean variables - true or false
let isThisEvening = false;
let isThisRMIT = true;

//object variables {}
const myStudentDetails = {
  name: "Pitbull",
  id: 1234,
  homeTown: "Melbourne",
};

let array = [2, 4, 6, 8, 10];
//counting for array is [0,1,2,3, etc.]
console.log(array[3]);
let student1 = "pitbull";
let student2 = "mr worldwide";
console.log(student1, student2);
//let studentArray = ["pitbull", "mr worldwide", "mr 305"];
console.log(studentArray[2]);
console.log(studentArray[0]);

console.log(myStudentDetails);
console.log("my hometown is", myStudentDetails.homeTown);

console.log("Hi");
console.log("how are u");

// const (constant variable) does not change, remains the same

console.log("hi i am", myName);
console.log("hi my student id is", myID);
myName = "abcd";
console.log("hi i am", myName);

// let myNewName = prompt("what is ur name");

console.log("hello", myNewName);
console.log("hello", myNewName, myCity);

// if you know the value is not going to change, define it using const
// or else use let, so u would not have to be typig it all the time

let a = 30;
{
  let a = 10;
  console.log("hello", a);
}
console.log("hello", a);
