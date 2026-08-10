"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = express_1.default.Router();
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        password: "password"
    }
];
api.get("/users", (req, res) => {
    res.json(users);
});
api.post("/users", (req, res) => {
    const addUser = { ...req.body, id: users.length + 1 };
    users.push(addUser);
    res.send(addUser);
});
api.get("/users/:id", (req, res) => {
    const searchUser = users.find((user) => user.id === Number(req.params.id));
    res.json(searchUser);
});
api.put("/users/:id", (req, res) => {
    res.json({ message: "Hello World" });
});
api.delete("/users/:id", (req, res) => {
    res.json({ message: "Hello World" });
});
exports.default = api;
//# sourceMappingURL=api.js.map