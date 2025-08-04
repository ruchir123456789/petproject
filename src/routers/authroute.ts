import express from "express"
const router = express.Router()
import { userregister, userlogin } from "../controllers/authcontroller.js"


router.post("/register", userregister);

router.post("/login", userlogin)


export default router;