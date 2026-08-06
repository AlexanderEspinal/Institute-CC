"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/users", (_req, res) => {
    res.json({ message: "List of users" });
});
userRoutes.get("/users/:id", (req, res) => {
    res.json({ message: `User ${req.params.id}` });
});
userRoutes.post("/users", (req, res) => {
    res.status(201).json({ message: "User created", data: req.body });
});
userRoutes.put("/users/:id", (req, res) => {
    res.json({ message: `User ${req.params.id} updated` });
});
userRoutes.delete("/users/:id", (req, res) => {
    res.json({ message: `User ${req.params.id} deleted` });
});
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map