import { Router } from "express";

import getCanbo from "../controllers/canbo/getCanBo";

const router = Router();

router.get("/:userId", getCanbo);

export default router;
