// A simple function that calculates a value
function calculateTotal(price, tax) {
  return price + tax;
}

// A Functional Decorator that adds logging behavior
function withLogging(fn) {
  return function (...args) {
    console.log(`[LOG] Calling ${fn.name || "anonymous"} with args:`, args);
    const result = fn(...args);
    console.log(`[LOG] Returned result: ${result}`);
    return result;
  };
}

// Decorating our base function
const loggedCalculateTotal = withLogging(calculateTotal);

// Usage
loggedCalculateTotal(100, 23);
