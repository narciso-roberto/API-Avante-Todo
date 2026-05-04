import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const listController = {
  getTodasListas: async (req: Request, res: Response) => {
    return res.json({
      success: true,
    });
  },

  getLista: async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json({
      success: true,
      data: { id },
    });
  },

  postLista: async (req: Request, res: Response) => {
    const { title, description } = req.body;

    return res.status(201).json({
      success: true,
      data: { title, description },
    });
  },

  putLista: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;

    return res.json({
      success: true,
      data: { id, title, description },
    });
  },

  deleteLista: async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json({
      success: true,
      message: `List ${id} deleted`,
    });
  },
};
