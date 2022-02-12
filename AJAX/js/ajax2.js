/*
 * @Date: 2022-02-10 21:12:33
 * @LastEditors: GC
 * @LastEditTime: 2022-02-10 21:32:27
 * @FilePath: \Ajax\js\ajax2.js
 */

document.getElementById("button1").addEventListener("click", loadUser);
document.getElementById("button2").addEventListener("click", loadUsers);

function loadUser() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      var output = "";

      output += `
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
        </ul>
      `;
      document.getElementById("user").innerHTML = output;
    }
  };

  xhr.send();
}

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = "";

      users.forEach(function (user) {
        output += `
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
        </ul>
      `;
      });
      document.getElementById("users").innerHTML = output;
    }
  };

  xhr.send();
}
