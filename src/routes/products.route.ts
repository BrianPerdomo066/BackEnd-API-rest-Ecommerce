import { Router, Request, Response  } from "express";
import{ createProduct, deleteProduct, getProducts, getProduct, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import {  authentionUser } from "../middlewares/authentication.middleware";

const router = Router();

// http://localhost:3000/products
router.get( '/',  getProducts );
router.get( '/:id', getProduct );
router.post ( '/', authentionUser, createProduct );
router.put( '/:id', authentionUser, updateProduct);
router.patch( '/:id', authentionUser, partialUpdateProduct);
router.delete( '/:id', authentionUser, deleteProduct);
router.get('/user/:id',( res: Response, req: Request) => {
    res.json({
        msg: 'TODO: obtener todos los productos por usuario'
    });
});



export default router;
