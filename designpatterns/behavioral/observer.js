const createSubject = () => {
  const observers = new Set();
  return {
    subscribe: (fn) => observers.add(fn),
    unsubscribe: (fn) => observers.delete(fn),
    notify: (data) => observers.forEach((fn) => fn(data)),
  };
};

// Usage:
const subject = createSubject();

subject.subscribe((data) => console.log(`Subscriber A received: ${data}`));
subject.subscribe((data) => console.log(`Subscriber B received: ${data}`));
subject.notify("Hello Observers!");
subject.subscribe((data) => console.log(`Subscriber C received: ${data}`));
subject.notify("Hello Observers again!");

// Logs:
// Subscriber A received: Hello Observers!
// Subscriber B received: Hello Observers!
