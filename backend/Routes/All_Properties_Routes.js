import { getAllProperties, createProperties, getProperty } from "../Controllers/All_Properties_Controller.js";
import express from "express";

const router = express.Router();

router.get("/allproperties", getAllProperties);
router.get("/allproperties/:id", getProperty);
router.post("/properties", createProperties);

export default router;