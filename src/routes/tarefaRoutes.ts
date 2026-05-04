import { Router } from "express";
import { taskController } from "../controler/tarefaControler";

const router = Router();

router.get("/getTodasTarefas", taskController.getTodasTarefas);
router.get("/getTarefa/:id", taskController.getTarefa);
router.post("/postTarefa", taskController.postTarefa);
router.put("/putTarefa/:id", taskController.putTarefa);
router.delete("/deleteTarefa/:id", taskController.deleteTarefa);

export default router;
