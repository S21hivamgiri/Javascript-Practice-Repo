const op = document.getElementById("log1");
const reolver = document.getElementById("resolver");

const promise = new Promise((resolved) => {
  reolver.addEventListener("click", () => {
    resolved("res");
  });
});

promise.then(() => {
  console.log("resolved");
  op.innerText = 'resolved';
});
