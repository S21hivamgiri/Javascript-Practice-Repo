const input = document.getElementById("test");
const output = document.getElementById("log");

const state = { value: "test" };
function twowayBind(state) {
  if (state.value) input.value = state.value;
  else if (input.value) state.value = input.value;
  output.innerText = state.value;
  Object.defineProperty(state, "value", {
    get() {
      return this._value;
    },

    set(newValue) {
      this._value = newValue;
      input.value = newValue;
      output.innerText = state.value;
      console.log(input.value);
      console.log(state);
    },
  });

  input.addEventListener("input", () => {
    state.value = input.value;
    console.log(input.value);
    console.log(state);
  });
}
twowayBind(state);

setTimeout(() => {
  state.value = "Hello world";
}, 5000);

setTimeout(() => {
  state.value = "This is SHivam";
}, 6000);
