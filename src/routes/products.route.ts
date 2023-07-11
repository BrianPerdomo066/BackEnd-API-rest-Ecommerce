import { Router, Request, Response  } from "express";
import{ createProduct, deleteProduct, getProducts, getProduct, updateProduct, partialUpdateProduct } from "../controllers/product.controller";
import {  authentionUser } from "../middlewares/authentication.middleware";

const router = Router();

// http://localhost:3000/products
router.get( '/', authentionUser, getProducts );
router.get( '/:id', getProduct );
router.post ( '/', createProduct );
router.put( '/:id', updateProduct);
router.patch( '/:id', partialUpdateProduct);
router.delete( '/:id', deleteProduct);



export default router;
