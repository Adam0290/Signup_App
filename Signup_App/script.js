let users = [
{ name: "aba", username: "aba", password: "aba" },
{ name: "aca", username: "aca", password: "aca" },
{ name: "ada", username: "ada", password: "ada" },
];
localStorage.setItem("users", JSON.stringify(users));


let name = "";
let username = "";
let password = "";


const createUser = (name, username, password) => {
return { name: name, username: username, password: password };
};

const addUser = (user) => {
const users = JSON.parse(localStorage.getItem("users"));
users.push(user);
localStorage.setItem("users", JSON.stringify(users));
};

const input = () => {
name = document.getElementById("name").value;
username = document.getElementById("username").value;
password = document.getElementById("password").value;
};

const signup = () => {
input();
addUser(createUser(name, username, password));
window.location.href = "login.html"
};

const login = () => {
input();
const users = JSON.parse(localStorage.getItem("users"));
let found = false;


users.forEach((ele) => {
if (
ele.name == name &&
ele.username == username &&
ele.password == password
) {
found = true; 
}
});

if (!found) {
console.log("user not found!");
} else {
localStorage.setItem("currentUser", name);
window.location.href = "index.html";
}
};