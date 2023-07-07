import { Router } from "express";

import routerUsers from "./users.route";
import routerProducts from "./products.route";
import routerAuth from "./auth.route";

const router = Router();

router.use( '/users',routerUsers );
router.use( '/products', routerProducts);
router.use( '/auth', routerAuth);


export default router;
