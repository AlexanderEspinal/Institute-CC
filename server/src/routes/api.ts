import express, {type Request, type Response} from "express";
import morgan from "morgan";

const api: express.Router = express.Router();

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
]

api.use(morgan("dev"));
api.use(express.json());

api.get("/users", (req: Request, res: Response) => {

res.json(users);

});

api.post("/users", (req: Request, res: Response) => {
    res.json({message: "Hello World"});    
    console.log(req.body);
});

api.get("/users/:id", (req: Request, res: Response) => {

    res.json({message: "Hello World"});    
});

api.put("/users/:id", (req: Request, res: Response) => {

    res.json({message: "Hello World"});    
});

api.delete("/users/:id", (req: Request, res: Response) => {

    res.json({message: "Hello World"});    
});

export default api;
