const createIterator = (items) => {
  let index = 0;
  return {
    hasNext: () => index < items.length,
    next: () => items[index++],
  };
};

// Usage:
const iterator = createIterator(["Apple", "Banana", "Cherry"]);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
// Logs:
// Apple
// Banana
// Cherry
