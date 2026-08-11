import express, {type Request, type Response} from "express";

const api: express.Router = express.Router();

let users = [
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
]

api.get("/users", (req: Request, res: Response) => {    
res.json(users);

});

api.post("/users", (req: Request, res: Response) => {
    const addUser = {...req.body, id: users.length + 1}
    users.push(addUser)
    res.send(addUser)
   
});

api.get("/users/:id", (req: Request, res: Response) => {

    const searchUser = users.find((user) => user.id === Number(req.params.id))
    res.json(searchUser)    
});

api.put("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updatedFields = { ...req.body };
    const exists = users.some((user) => user.id === id);

    if (!exists) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    users = users.map((user) =>
        user.id === id ? { ...user, ...updatedFields } : user
    );

    const updatedUser = users.find((user) => user.id === id);
    res.json(updatedUser);
});

api.delete("/users/:id", (req: Request, res: Response) => {
users = users.filter((user) => user.id !== Number(req.params.id))
res.send("El usuario se ha eliminado")

});

export default api;
