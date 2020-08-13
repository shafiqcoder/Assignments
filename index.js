const userNames = [{
    id: 1,
    name: "Ameer Hamza",
    username: "ameernormie",
    password: "abc",
  },
  {
    id: 2,
    name: "Rafay Ahmed",
    username: "rafayjanjua",
    password: 123,
  },
  {
    id: 3,
    name: "Shafiq Ahmed",
    username: "shafiqcoder",
    password: 456,
  },
];

document.body.style.background = "aqua";

function getUserName(user_name, user_password) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = userNames.find((user) => user.username === user_name);
      // TypeGuard
      if(!user) {
        // We will reject the promise if user is not found
        rej("No user found!")
      }
      // On this line, We are sure that the user exists
      if(user.password == user_password) {
        res("Success: User found!")
      } else {
        rej("Password is not correct")
      }
    }, 3000);
  });
}

function getStyle(id, name) {
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

/**
 * Takes an id of element and toggles it's display
 * 
 * @param {string} ID 
 */
function showOrHideElement(id, type) {
  var element = document.getElementById(id);
  element.style.display = type;
}

function login() {
  document.getElementById("result").innerHTML = "";
  showOrHideElement('myDiv', "none");
  // loading === true
  document.getElementById("loading").innerHTML = "We are verifying your credentials! Please wait...";
  document.getElementById("loading").style.fontSize = "x-large";
  var p = document.getElementById("u_pass").value;
  var u = document.getElementById("u_name").value;
  getUserName(u, p)
    .then(function (user) {
      document.getElementById("result").innerHTML = JSON.stringify(user, null, 2);
    })
    .catch(function (err) {
      document.getElementById("result").innerHTML = err;
    })
    .finally(() => {
      document.getElementById("loading").innerHTML = "";
      showOrHideElement('myDiv', "block");
    })
}