import { getAllAgents, CreateAgent } from "../Controllers/Agent_Controller.js";
import express from "express";

const router = express.Router();

router.get("/allagents",getAllAgents);
router.post("/agent", CreateAgent)

export default router;