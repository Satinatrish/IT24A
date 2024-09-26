// a. Data Types
// Using integer, float, string, and boolean data types
let intNum = 10;       // Integer
let floatNum = 10.5;   // Float
let strText = "hello"; // String
let isValid = true;    // Boolean
// b. Arithmetic and Logical Operators
let sumResult = intNum + floatNum;  // Arithmetic addition
let difference = intNum - floatNum; // Arithmetic subtraction
let product = intNum * floatNum;    // Arithmetic multiplication
let division = intNum / floatNum;   // Arithmetic division
let isGreater = intNum > floatNum;  // Logical comparison (greater than)

// c. Conditional Statements
// i. if-else statement
if (isGreater) {
  console.log(`${intNum} is greater than ${floatNum}`);
} else {
  console.log(`${intNum} is not greater than ${floatNum}`);
}

// ii. Switch-case statement
function switchExample(value) {
  switch (value) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    default:
      return "Other";
  }
}

console.log(switchExample(2));  // Output: Two

// d. Loops
// Using a for loop
for (let i = 0; i < 5; i++) {
  console.log(`For loop iteration ${i}`);
}

// Using a while loop
let count = 0;
while (count < 5) {
  console.log(`While loop iteration ${count}`);
  count++;
}

// e. Functional Programming

// i. Determine if a number is odd or even
function isOddOrEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isOddOrEven(5));  // Output: Odd

// ii. Determine if a number is a prime number
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // Output: true
