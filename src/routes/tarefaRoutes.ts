import { Router } from "express";
import { taskController } from "../controler/tarefaControler";

const router = Router();

router.get("/getContarTarefas", taskController.getContarTarefas);
router.get("/getTarefa/:id", taskController.getTarefa);
router.post("/postTarefa/:id", taskController.postTarefa);
router.put("/putTarefa/:id", taskController.putTarefa);
router.delete("/deleteTarefa/:id", taskController.deleteTarefa);

export default router;
