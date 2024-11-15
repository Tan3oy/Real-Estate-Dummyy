import { getAllAgents } from "../Controllers/Agent_Controller.js";
import express from "express";

const router = express.Router();

router.get("/allagents",getAllAgents);

export default router;