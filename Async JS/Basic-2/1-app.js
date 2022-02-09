/*
 * @Date: 2022-02-08 14:42:55
 * @LastEditors: GC
 * @LastEditTime: 2022-02-09 09:55:14
 * @FilePath: \JavaScript Basic\Async JS\Basic-2\app.js
 */

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data");
    callback({ userEmail: email });
  }, 5000);
}

function getUserVideo(email, callback) {
  setTimeout(() => {
    callback(["Video 1", "Video 2", "Video 3"]);
  }, 5000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("Title of the videos");
  }, 5000);
}

const user = loginUser("defnoaob@gmail.com", "12345465y", (user) => {
  console.log(user);

  getUserVideo(user.userEmail, (videos) => {
    console.log(videos);

    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("End");

// We add a callback function, and once the data comes back(when the setTimeout function runs), we invoke
//    that callback function which triggers all of the functionality(in this case: console.log(user) and so on).
