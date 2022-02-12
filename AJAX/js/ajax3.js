/*
 * @Date: 2022-02-10 21:34:26
 * @LastEditors: GC
 * @LastEditTime: 2022-02-10 21:47:25
 * @FilePath: \Ajax\js\ajax3.js
 */
document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = "";

      users.forEach(function (user) {
        output += `
            <div class='user'>
                <img src='${user.avatar_url}' height='70' width='70'>
            </div>
            <ul>
                <li>ID: ${user.id}</li>
                <li>Login: ${user.login}</li>
            </ul>
        `;
      });
      document.getElementById("users").innerHTML = output;
    }
  };

  xhr.send();
}
