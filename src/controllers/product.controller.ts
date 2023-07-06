import { Request, Response } from "express";
import { getAllProducts, inserproduct } from "../services/product.services";


async function getProducts( req: Request, res: Response ) {
    
    try{
        const 
            response = await getAllProducts(),
            data = response ? response : 'NOT_FOUND';                  // pendiente

        console.log( data );
        res.json( data );
        
    }catch( error) {
        console.log( 'Error en la extarcion del listado de productos' );
        res.json({
            msg: 'ERROR_INSERT_LIST'
        });

    }
}

async function getProduct( req: Request, res: Response ) {
    try {
        const productId = req.params.id;

        const response = await getProductById ( productId); 

        console.log( res );
        res.json({ response });

    }catch (error) {

        console.log(`Error en extarcion de producto con id ${ ProductId }`)

        res.json({
            msg: 'ERROR_GET_PRODUCT_BY_ID'
        });

    }
}

async function createProduct( req: Request, res: Response ) {

    try {
        const data = await inserproduct ( req.body );

    console.log ( data );
    res.json( data  );

    } catch ( error ) {
        console.log( 'Error en la insercion del producto' );
        res.json({
            msg: 'ERROR_INSERT_PRODUCT'
        });
    }
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