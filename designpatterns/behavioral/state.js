const Context = (initialState) => ({
  state: initialState,
  request() {
    this.state.handle(this);
  },
});

const RedState = {
  handle: (ctx) => {
    console.log("Red: Stop!");
    ctx.state = GreenState; // Transition to next state
  },
};

const GreenState = {
  handle: (ctx) => {
    console.log("Green: Go!");
    ctx.state = RedState; // Transition back
  },
};

// Usage:
const light = Context(RedState);
light.request(); // Logs: Red: Stop!
light.request(); // Logs: Green: Go!
light.request(); // Logs: Red: Stop!
