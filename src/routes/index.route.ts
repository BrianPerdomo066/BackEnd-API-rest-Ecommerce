import { Router, Request, Response } from "express";

import routerUsers from "./users.route";
import routerProducts from "./products.route"

const router = Router();

router.use( '/users',routerUsers );
router.use( '/products', routerProducts);

export default router;
