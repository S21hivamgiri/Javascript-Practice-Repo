const concurrentNPromises = (tasks, n, finalCallback) => {
  if (tasks.length === 0) {
    return finalCallback(null, []);
  }

  let counter = 0;
  let completedCount = 0;
  let hasError = false;

  const len = tasks.length;
  const results = new Array(len);

  function runNextWorker() {
    if (counter >= len || hasError) return;

    const index = counter;
    console.log("Executing task index: " + index);
    counter++;

    tasks[index]()
      .then((result) => {
        if (hasError) return;
        console.log("Executed: " + index);
        results[index] = result;
        completedCount++; // Increment on success
        if (completedCount === len) {
          return finalCallback(null, results);
        }
        // Pick up the next task in the queue
        runNextWorker();
      })
      .catch((err) => {
        if (hasError) return;
        hasError = true;
        return finalCallback(err, null);
      });
  }

  const initialWorkers = Math.min(n, len);
  for (let i = 0; i < initialWorkers; i++) {
    runNextWorker();
  }
};

const tasks = [
  () => resolvedDelayedApi(3000),
  () => resolvedDelayedApi(500),
  () => resolvedDelayedApi(300),
  () => resolvedDelayedApi(700),
  () => resolvedDelayedApi(200),
];

// Execute max 2 at a time
concurrentNPromises(tasks, 2, (err, results) => {
  if (err) {
    console.error("Batch operation failed:", err.message);
  } else {
    console.log("All results in order:", results);
  }
});

// 4. Debounce Timer
const debounceTimer = (callback, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(callback(...args), delay);
  };
};

const debounce = debounceTimer((data) => console.log(data), 2000);
debounce("Hello, World!");
setTimeout(() => {
  debounce("Hello, World! 1");
}, 1000);
setTimeout(() => {
  debounce("Hello, World! 2");
}, 3500);
debounce("Hello, World! 3");

//3. Timeout with retries
const promiseTimeoutWithRetries = (callback, timeout, retryLimit) => {
  return callback().catch((err) => {
    if (retryLimit <= 0) throw err;
    console.log(`Retrying... ${retryLimit - 1} attempts left`);
    return new Promise((resolve, reject) =>
      setTimeout(
        () =>
          promiseTimeoutWithRetries(callback, timeout, retryLimit - 1)
            .then(resolve)
            .catch(reject),
        timeout,
      ),
    );
  });
};
promiseTimeoutWithRetries(unResolvedApi, 1000, 3)
  .then((data) => console.log(data))
  .catch((err) => console.error("Failed: ", err));

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
