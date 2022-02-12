/*
 * @Date: 2022-02-10 16:49:58
 * @LastEditors: GC
 * @LastEditTime: 2022-02-12 15:11:53
 * @FilePath: \JavaScript Basic\AJAX\js\ajax1.js
 */

document.getElementById("button").addEventListener("click", loadText);

function loadText() {
  var xhr = new XMLHttpRequest();

  // Create a function to make the request, the type of the request
  //    and what file or URL we are making it to

  // Open() --> type, url/file, async
  xhr.open("GET", "sample.txt", true);

  //   console.log("READYSTATE:", xhr.readyState); --> 1

  // Option --> used for loader
  //   xhr.onprogress = function () {
  //     // console.log("READYSTATE:", xhr.readyState); --> 3
  //   };

  // (1):
  xhr.onload = function () {
    // console.log("READYSTATE:", xhr.readyState); --> 1 and 4

    // Check for the status
    if (this.status == 200) {
      document.getElementById("text").innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "Not found";
    }
  };

  xhr.onerror = function () {
    console.log("Request Error....");
  };

  // (2):
  //   xhr.onreadystatechange = function () {
  //     // console.log("READYSTATE: ", xhr.readyState); --> 1, 2, 3, 4

  //     // We need to check the status and ready state
  //     if (this.readyState == 4 && this.status == 200) {
  //       console.log(this.responseText);
  //     }
  //   };

  // Send request
  xhr.send();
}
