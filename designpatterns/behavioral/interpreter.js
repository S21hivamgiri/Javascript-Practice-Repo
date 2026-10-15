const Num = (val) => ({ interpret: () => val });
const Add = (left, right) => ({
  interpret: () => left.interpret() + right.interpret(),
});

// Usage: Evaluates (5 + 3)
const expression = Add(Num(5), Num(3));
console.log(expression.interpret()); // 8
