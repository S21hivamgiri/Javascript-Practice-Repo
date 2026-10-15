const ElementA = { accept: (v) => v.visitA() };
const ElementB = { accept: (v) => v.visitB() };

const Visitor = {
  visitA: () => console.log("Processing Element A"),
  visitB: () => console.log("Processing Element B"),
};

// Usage:
ElementA.accept(Visitor); // Processing Element A
ElementB.accept(Visitor); // Processing Element B
