// Originator: Creates and restores state snapshots
const Editor = (initialContent = "") => ({
  content: initialContent,
  createMemento() {
    return this.content;
  }, // Save snapshot
  restore(memento) {
    this.content = memento;
  }, // Restore snapshot
});

// Caretaker: Manages state history
const History = () => {
  const mementos = [];
  return {
    push: (memento) => mementos.push(memento),
    pop: () => mementos.pop(),
  };
};

// Usage:
const editor = Editor("First draft");
const history = History();

// Save state 1
history.push(editor.createMemento());

// Change state
editor.content = "Second draft";
console.log(editor.content); // Second draft

// Undo (restore previous state)
editor.restore(history.pop());
console.log(editor.content);
