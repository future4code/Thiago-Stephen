"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fileData = fs.readFileSync("./users.json").toString();
let users;
try {
    users = JSON.parse(fileData);
}
catch (error) {
    users = [];
    console.log("Erro ao ler a base de dados: " + error.message);
}
const id = Number(process.argv[2]);
users.forEach((element, i, array) => {
    if (element.id === id) {
        array.splice(i, 1);
    }
});
console.log(users);
try {
    const updatedUsers = JSON.stringify(users);
    fs.writeFileSync("./users.json", updatedUsers);
}
catch (error) {
    console.log("erro ao atualizar a base de dados");
}
//# sourceMappingURL=deleteuser.js.map