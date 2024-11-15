import { createClient, getAllClients } from "../Controllers/Client_Controller.js"
import express from "express"

const router= express.Router()

router.get("/allclients", getAllClients)
router.post("/clients", createClient)

export default router

