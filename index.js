// Variables
var num1 = 24;
var num2;
var numOrString;
// Tableaux
var arr = ["chien", "chat", "poisson"];
var tableau = [];
var tableau1 = [];
var zidane = {
    id: 0,
    name: "Zidane",
    jersey: 10
};
// Classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, 'Prince');
// console.log(prince);
var sayMyName = function (name) {
    console.log("Bonjour ".concat(name));
};
// void => nothing return
var ageOfCapitaine = function (age, size) {
    if (size) {
        console.log("La taille du capitaine est de ".concat(size, "cm et il est ag\u00E9 de ").concat(age));
    }
    else {
        console.log("Le capitaine est ag\u00E9 de : ".concat(age, " ans"));
    }
};
// Enue & Turple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PRENIUM"] = 1] = "PRENIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.PRENIUM);
var user1 = {
    name: "Julien",
    attributes: [42, 'author'],
    role: Role.ADMIN
};
if (user1.role === Role.ADMIN) {
    console.log("connexion Admin");
}
