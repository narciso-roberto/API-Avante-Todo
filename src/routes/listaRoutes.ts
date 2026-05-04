import { Router } from "express";
import { listController } from "../controler/listaControler";

const router = Router();

router.get("/getTodasListas", listController.getTodasListas);
router.get("/getLista/:id", listController.getLista);
router.post("/postLista", listController.postLista);
router.put("/putLista/:id", listController.putLista);
router.delete("/deleteLista/:id", listController.deleteLista);

export default router;
