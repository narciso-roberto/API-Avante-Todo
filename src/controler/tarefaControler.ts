import { Request, Response } from "express";

export const taskController = {
  getTodasTarefas: async (req: Request, res: Response) => {
    return res.json({
      success: true,
    });
  },

  getTarefa: async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json({
      success: true,
      data: { id },
    });
  },

  postTarefa: async (req: Request, res: Response) => {
    const { title, description, status, listId } = req.body;

    return res.status(201).json({
      success: true,
      data: {
        title,
        description,
        status,
        listId,
        createdAt: new Date(),
        finishedAt: null,
      },
    });
  },

  putTarefa: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, status, finishedAt } = req.body;

    return res.json({
      success: true,
      data: {
        id,
        title,
        description,
        status,
        finishedAt,
      },
    });
  },

  deleteTarefa: async (req: Request, res: Response) => {
    const { id } = req.params;

    return res.json({
      success: true,
      message: `Task ${id} deleted`,
    });
  },
};
