/*
 * @Date: 2022-02-08 23:05:33
 * @LastEditors: GC
 * @LastEditTime: 2022-02-09 10:34:21
 * @FilePath: \JavaScript Basic\Async JS\Basic-2\4-await.js
 */

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

// loginUser("Brian", "aibfv")
//   .then((user) => getUserVideo(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

async function displayUser() {
  try {
    const loggedUser = await loginUser("ed", 2345);
    const videos = await getUserVideo(loggedUser.email);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } 
  catch(err) {
      console.log("We could not get the video");
  }

}
displayUser();
