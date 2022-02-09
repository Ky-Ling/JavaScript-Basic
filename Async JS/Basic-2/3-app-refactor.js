/*
 * @Date: 2022-02-08 22:44:49
 * @LastEditors: GC
 * @LastEditTime: 2022-02-09 10:32:55
 * @FilePath: \JavaScript Basic\Async JS\Basic-2\3-app-refactor.js
 */

// Refactor the code in app.js file

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUserVideo(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Video 1", "Video 2", "Video 3"]);
    }, 5000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Title of the videos");
    }, 5000);
  });
}

loginUser("Brian", "aibfv")
  .then((user) => getUserVideo(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

// const yt = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Getting stuff things from youtube");
//     resolve({ videos: [1, 3, 5, 6, 7, 8] });
//   }, 5000);
// });

// const fb = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("Getting stuff things from facebook");
//     resolve({ user: "Name" });
//   }, 5000);
// });

// Promise.all([yt, fb]).then((result) => console.log(result));
