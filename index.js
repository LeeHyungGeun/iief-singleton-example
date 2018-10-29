const getUser = (() => {
  let promise;
  return () => {
    if (!promise) {
      promise = new Promise((resolve, reject) => {
        // do ajax
        const user = { name: 'Ken' };
        resolve(user);
      });
    }
    return promise;
  }
})();

// A Module
getUser().then((user) => {
  console.log(user);
});

// B Module
getUser().then((user) => {
  console.log(user);
});

// C Module
getUser().then((user) => {
  console.log(user);
});