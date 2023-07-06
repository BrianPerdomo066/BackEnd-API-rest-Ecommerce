import { Router, Request, Response } from "express";
import{ createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.controller";

const router = Router();

// http://localhost:3000/products
router.get( '/', getProducts);
router.get( '/:id', getProduct );

router.post ( '/', createProduct );
router.put( '/', updateProduct);
router.delete( '/', deleteProduct);



export default router;
