// File: extendedLintingViolations.js

const greetUser = (name) => { return "Hello, " + name + "!"; };  // Violation: Prefer template literals over string concatenation

const multiplyNumbers = (a, b) => { return a*b }  // Violation: Missing semicolon

const badlyFormattedComponent = function(props) {
  // Violation: Inconsistent indentation
   const result = 10 * 2  // Violation: Missing semicolon

    return result
};

// Violation: Unused variable
const unusedVariable = "This variable is not used"

const isEven = (num) => {
  // Violation: Missing space after 'if', Violation: Use strict equality ===
  if(num%2 == 0) {
    return true
  } else {
    return false
  }
}

// Violation: Multiple empty lines
const subtractNumbers = (a, b) => {

  return a - b

}

export { greetUser, multiplyNumbers, badlyFormattedComponent, unusedVariable, isEven, subtractNumbers };
