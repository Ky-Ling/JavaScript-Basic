/*
 * @Date: 2022-02-08 14:43:03
 * @LastEditors: GC
 * @LastEditTime: 2022-02-09 10:28:00
 * @FilePath: \JavaScript Basic\Async JS\Basic-2\promise.js
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Got the user");
    // resolve({ user: "Brian" });

    reject(new Error("User not log in!"));
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err));
