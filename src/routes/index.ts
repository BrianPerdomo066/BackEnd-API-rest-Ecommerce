import { Router, Request, Response } from "express";

import routerUsers from "./users";
import routerProducts from "./products"

const router = Router();

router.use( '/users',routerUsers );
router.use( '/products', routerProducts);

export default router;
