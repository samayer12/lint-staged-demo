// File: eslintViolationsExample.js

const greetUser = (name) => `Hello, ${name}!`; // Violation: Prefer template literals over string concatenation

const multiplyNumbers = (a, b) => a * b; // Violation: Missing semicolon

const badlyFormattedComponent = () => {
  // Violation: Inconsistent indentation
  const result = 10 * 2; // Violation: Magic number

  return result;
};

// Violation: Unused variable
const unusedVariable = 'This variable is not used';

const isEven = (num) => {
  // Violation: Missing space after 'if'
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

// Violation: Multiple empty lines
const subtractNumbers = (a, b) => a - b;

export {
  greetUser, multiplyNumbers, badlyFormattedComponent, unusedVariable, isEven, subtractNumbers,
};
