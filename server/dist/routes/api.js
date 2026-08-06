"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
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
api.use((0, morgan_1.default)("dev"));
api.use(express_1.default.json());
api.get("/users", (req, res) => {
    res.json(users);
});
api.post("/users", (req, res) => {
    res.json({ message: "Hello World" });
    console.log(req.body);
});
api.get("/users/:id", (req, res) => {
    res.json({ message: "Hello World" });
});
api.put("/users/:id", (req, res) => {
    res.json({ message: "Hello World" });
});
api.delete("/users/:id", (req, res) => {
    res.json({ message: "Hello World" });
});
exports.default = api;
//# sourceMappingURL=api.js.map