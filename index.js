// Define basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function increment(n) {
    return ++n;
  }
  
  function decrement(n) {
    return --n;
  }
  
  // Define functions for parsing integers and floating point numbers
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  