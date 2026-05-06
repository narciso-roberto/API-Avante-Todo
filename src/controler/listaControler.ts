import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const listController = {
  getTodasListas: async (req: Request, res: Response) => {
    const listas = await prisma.list.findMany({
      include: { tasks: true },
    });

    return res.json({
      success: true,
      data: listas,
    });
  },

  getLista: async (req: Request, res: Response) => {
    const parametros = req.params;
    const idLista = Number(parametros.id);

    const list = await prisma.list.findUnique({
      where: { id: idLista },
    });

    return res.json({
      success: true,
      data: list,
    });
  },

  postLista: async (req: Request, res: Response) => {
    const body = req.body;

    const list = await prisma.list.create({
      data: body,
    });

    console.log(list)

    return res.status(201).json({
      success: true,
      data: list,
    });
  },

  putLista: async (req: Request, res: Response) => {
    const parametros = req.params;
    const body = req.body;
    const idLista = Number(parametros.id);

    const listaAtualizada = await prisma.list.update({
      where: { id: idLista },
      data: body,
    });

    return res.json({
      success: true,
      data: listaAtualizada,
    });
  },

  deleteLista: async (req: Request, res: Response) => {
    const parametros = req.params;
    const idLista = Number(parametros.id);

    const deletedList = await prisma.list.delete({
      where: { id: idLista },
    });

    return res.json({
      success: true,
      message: `Lista ${idLista} deleteda`,
      data: deletedList,
    });
  },
};
