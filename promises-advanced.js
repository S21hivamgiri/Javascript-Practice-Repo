//2. Promise Timeout
const promiseTimeout = (promise, timeout) => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Timeout"), timeout);
  });
  return Promise.race([promise, promise2]);
};

promiseTimeout(resolvedDelayedApi(2000), 1000)
  .then((data) => console.log(data))
  .catch((err) => console.error("Failed:", err));

// 1.Retries promise n number of promised
function retriesPromisesNTimes(callback, n) {
  return callback().catch((err) => {
    if (err) {
      if (n <= 0) throw err;

      console.log(`Retrying ${n} times... ${n - 1} attempts left`);
      return retriesPromisesNTimes(callback, n - 1);
    }
  });
}

retriesPromisesNTimes(unResolvedApi, 3, 1000)
  .then((data) => console.log(data))
  .catch((err) => console.error("Failed:", err));

// Utilities functions
function resolvedApi() {
  return fetch("https://6a71b85ef687776c13f098d3.mockapi.io/test/user").then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    },
  );
}

function resolvedDelayedApi(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://6a71b85ef687776c13f098d3.mockapi.io/test/user")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    }, delay);
  });
}

function unResolvedApi() {
  return fetch("https://6a71b85ef687776c13f098d3.mockapi.io/test/user2").then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    },
  );
}

function unResolvedDelayedApi(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://6a71b85ef687776c13f098d3.mockapi.io/test/user2")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    }, delay);
  });
}
