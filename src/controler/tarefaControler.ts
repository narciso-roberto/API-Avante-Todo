import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

export const taskController = {
  getContarTarefas: async (req: Request, res: Response) => {
    const qtdTarefas = await prisma.task.count();

    return res.json({
      success: true,
      data: qtdTarefas,
    });
  },

  getTarefa: async (req: Request, res: Response) => {
    const parametros = req.params;
    const idLista = Number(parametros.id);

    const tarefa = await prisma.task.findUnique({
      where: { id: idLista },
    });

    return res.json({
      success: true,
      data: tarefa,
    });
  },

  postTarefa: async (req: Request, res: Response) => {
    const body = req.body;

    console.log(body)

    const tarefa = await prisma.task.create({
      data: body,
    });

    return res.status(201).json({
      success: true,
      data: tarefa,
    });
  },

  putTarefa: async (req: Request, res: Response) => {
    const parametros = req.params;
    const body = req.body;
    const idTarefa = Number(parametros.id);

    const tarefaAtualizada = await prisma.task.update({
      where: { id: idTarefa },
      data: body,
    });

    return res.json({
      success: true,
      data: tarefaAtualizada,
    });
  },

  deleteTarefa: async (req: Request, res: Response) => {
    const parametros = req.params;
    const idTarefa = Number(parametros.id);

    const deletedTask = await prisma.task.delete({
      where: { id: idTarefa },
    });

    return res.json({
      success: true,
      message: `tarefa ${idTarefa} deleteda`,
      data: deletedTask,
    });
  },
};
