var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Sandhya",
    email: "sandhya@gmail.com",
    password: "hello",
    role: Roles.admin
};
var user2 = {
    name: "Ritu",
    email: "ritu@gmail.com",
    password: "hello",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === "admin" ? "".concat(name, " is allowed to edit the website.") : "".concat(name, " is not allowed to edit the website.");
};
console.log(isAdmin(user2));
