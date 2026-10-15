const FlyweightFactory = (function () {
  const cache = {};
  return {
    get: (sharedState, test) => {
      const key = sharedState + test;
      return (cache[key] ??= { key });
    },
    count: () => Object.keys(cache).length,
  };
})();

// Usage:
const flyweight1 = FlyweightFactory.get("Shared-Type-A", "test");
const flyweight2 = FlyweightFactory.get("Shared-Type-A", "test");

console.log(flyweight1 === flyweight2);
