import { Router, Request, Response } from "express";
import { login, register } from "../controllers/auth.controller"

const router = Router();

// http://localhost:3000/auth/register
router.post( '/register', register);

router.post('/login',login );


export default router;
