import { getAllCounters,createCounter } from '../Controllers/Counter_Controller.js'
import expess from 'express'

const router= expess.Router()

router.get("/allcounters",getAllCounters)
router.post("/counters",createCounter)

export default router