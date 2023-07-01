import { Request, Response } from "express";
import productModel from "../models/products.model";


async function getProducts( req: Request, res: Response ) {
    console.log( 'Obtengo todos los productos' );
    res.send ( `Obtengo todos los productos`);
}

async function getProduct( req: Request, res: Response ) {
    console.log( 'Obtiene un producto por ID' );
    res.send ( `Obtiene un producto por ID`);
}

async function createProduct( req: Request, res: Response ) {
    const data = req.body;

    const response = await productModel.create( data );

    res.json( response );
}

async function updateProduct( req: Request, res: Response ) {
    console.log( 'Actualisa un producto por ID' );
    res.send ( `Actualisa un producto por ID`);
}

async function deleteProduct( req: Request, res: Response ) {
    console.log( 'Elimina un producto por ID' );
    res.send ( `Elimina un producto por ID`);
}


export{
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};