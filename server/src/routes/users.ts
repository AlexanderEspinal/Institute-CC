import { Router, type Request, type Response } from "express";
import { prisma } from "../lib/prisma";

const router: Router = Router();

router.get("/users", async (_req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

router.post("/users", async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.create({ data: req.body });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "Error al crear usuario" });
    }
});

router.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(req.params.id) }
        });
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuario" });
    }
});

router.put("/users/:id", async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.update({
            where: { id: Number(req.params.id) },
            data: req.body
        });
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
});

router.delete("/users/:id", async (req: Request, res: Response) => {
    try {
        await prisma.user.delete({
            where: { id: Number(req.params.id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
});

export default router;
