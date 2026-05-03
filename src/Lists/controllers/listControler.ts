import { prisma } from "../../../lib/prisma";
import { Request, Response } from "express";

export const getList = (req: Request, res:Response) => {
    res.send("getList")
}

export const postList = (req: Request, res:Response) => {
    const data = req.body

    res.json(data)
}

