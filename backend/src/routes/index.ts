import { Router, Request, Response } from "express";
import { getBackendStatus, getExampleData } from "../controllers/exampleController";

const router = Router();

router.get("/", getBackendStatus);
router.get("/example", getExampleData);

export default router;
