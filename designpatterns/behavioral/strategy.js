const Context = (strategy) => ({
  execute: (data) => strategy(data),
});

// Strategies:
const upperCase = (str) => str.toUpperCase();
const lowerCase = (str) => str.toLowerCase();

// Usage:
const processor = Context(upperCase);
console.log(processor.execute("hello")); // HELLO
const processor2 = Context(lowerCase);
console.log(processor2.execute("heLLo"));
