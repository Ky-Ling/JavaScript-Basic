/*
 * @Date: 2022-02-08 10:37:57
 * @LastEditors: GC
 * @LastEditTime: 2022-02-09 20:33:12
 * @FilePath: \JavaScript Basic\Async JS\Basic-1\callbacks.js
 */

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    // Get these posts and put them on the page
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    // Output the result on to the page
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 5000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// Run this program, it waited 5 seconds and then it showed all of the posts. It has to wait to create the post before it
//      actually called the callback. It had to push on to it and then call a callback and this whole thing took 5 seconds.
