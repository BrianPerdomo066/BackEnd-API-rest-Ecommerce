import { Request, Response } from "express";
import { inserproduct } from "../services/product.services";


async function getProducts( req: Request, res: Response ) {
    console.log( 'Obtengo todos los productos' );
    res.send ( `Obtengo todos los productos`);
}

async function getProduct( req: Request, res: Response ) {
    console.log( 'Obtiene un producto por ID' );
    res.send ( `Obtiene un producto por ID`);
}

async function createProduct( req: Request, res: Response ) {
    console.log( req.body )

    const data = await inserproduct ( req.body );

    console.log ( data );
    res.json( data  );
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