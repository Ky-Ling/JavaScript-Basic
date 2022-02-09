/*
 * @Date: 2022-02-08 10:38:07
 * @LastEditors: GC
 * @LastEditTime: 2022-02-09 20:33:46
 * @FilePath: \JavaScript Basic\Async JS\Basic-1\promises.js
 */

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(error));

// It is setting the timeout and then as soon as it is done, it is gonna resolve, once it resolved, then it will call getPost().

// Async / Await
// async function init() {
//   await createPost({ title: "Post three", body: "This is post three" });

//   getPosts();
// }
// // We are waiting the createPost to be done until we move on and call getPost().
// init();

// Async / Await / Fetch
// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await res.json();

//   console.log(data);
// }

// fetchUsers();

// Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "GoodBye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   res => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//   console.log(values)
// );
