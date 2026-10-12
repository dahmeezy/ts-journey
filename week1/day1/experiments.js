// The goal is not working code. It is to break things deliberately and record what surprises you. For each line below, write down what you think it will print BEFORE running it, then run it and compare.

// console.log("5" + 3);  //"53"

// console.log("5" - 3); //2
// console.log("5" * "2"); //10
// console.log(5 + true); //6
// console.log(5 + null); //5
// console.log(5 + undefined); //NaN
// console.log("" + 0); //"0"
// console.log([] + []); //empty array
// console.log([] + {}); // empty object

// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log(0 == ""); //false*, output was true 
// console.log(0 === ""); //false
// console.log(0 == false); //true
// console.log("0" == false); //true
// console.log(NaN == NaN); //true*, output was false 

// console.log(typeof 42); //number
// console.log(typeof "hello"); //string
// console.log(typeof true); //boolean
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// console.log(typeof []); //array*, output was object 

// console.log(0.1 + 0.2); //0.3*, output was 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //true*, output was false 

// Then test const behaviour. Run these and read the exact error:

// const x = 5;
// x = 10; 

// // Comment those out, then run:

const person = { name: "Ada" };
person.name = "Grace";
console.log(person);

// Understand why the first throws but the second works. const locks the binding, not the contents.

// Then template literals (the backtick is the key above Tab, not a quote):

const userName = "Ada";
const age = 24;
console.log(`Name: ${userName}, age: ${age}`);
console.log(`Next year: ${age + 1}`);

// DELIVERABLE: at the bottom of the file, a comment block listing at least five results that surprised you, in your own words.

/* RESULTS THAT SURPRISED ME:
- console.log(0 == ""): i didnt think that an empty string should be same as zero at any point, regardless of wether the comparison is strict
- console.log(NaN == NaN): since the both sides of the comparison is the same, i was expecting 'true', even tho I had read about the result somewhere.
- console.log(0.1 + 0.2): the 2 numbers that were added was in 1dp, so why?
- console.log(0.1 + 0.2==3): same logic/reason as the last one i explained
- console.log(typeof []): i thought since array/ list use square brackets, then the type should be array but it was object
*/


// Two concepts this teaches: the + operator joins text if either side is a string, but -, *, / always do maths. And computed decimals are approximate, which is why 0.1 + 0.2 is not exactly 0.3.