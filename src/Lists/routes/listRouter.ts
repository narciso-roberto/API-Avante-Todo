import { Router } from "express";
import { getList, postList } from "../controllers/listControler";


const router = Router();

router.get("/", getList)
router.post("/post", postList)

export default router;