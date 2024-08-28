import { Router } from "express";

import getCanbo from "../controllers/canbo/getCanBo";
import getCanbos from "../controllers/canbo/getCanBos";

const router = Router();

router.get("/:userId", getCanbo);
router.get("/", getCanbos);

export default router;
