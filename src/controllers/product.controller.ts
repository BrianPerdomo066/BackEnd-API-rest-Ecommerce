import { Request, Response, response } from "express";
import { getAllProducts,getProductById, inserproduct, removeProductById, updateProductById} from "../services/product.services";


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
    const productId = req.params.id;
    try {
        

        const response = await getProductById ( productId ); 

        console.log( res );
        res.json({ response });

    }catch (error) {

        console.log(`Error en extarcion de producto con id ${ productId }`)

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
    
    const { params: { id }} = req;
    const { body } = req;          // si no se netiende hacerlo de la forma convecional

    try{
        const reponse = await updateProductById(id, body );

        console.log( response );
        res.json( response );
    }catch(error) {
        console.log(`Error en la actualiscion del producto con id ${ id }`)

        res.json({
            msg: 'ERROR_UPDATE_PRODUCT_BY_ID'
        });


    }
}


async function partialUpdateProduct ( req: Request, res: Response ) {
    
    const { params: { id }} = req;
    const { body } = req;          // si no se netiende hacerlo de la forma convecional

    try{
        const reponse = await updateProductById(id, body );

        console.log( response );
        res.json( response );
    }catch(error) {
        console.log(`Error en la actualiscion del producto con id ${ id }`)

        res.json({
            msg: 'ERROR_UPDATE_PRODUCT_BY_ID'
        });


    }
}

async function deleteProduct( req: Request, res: Response ) {
    
    const productId = req.params.id;

    try{
        const response = await removeProductById ( productId );

        console.log( response );

    }catch(error) {
        console.log(`Error en extarcion de producto con id ${ productId }`)

        res.json({
            msg: 'ERROR_REMOVE_PRODUCT_BY_ID'
        });

    }
}


export{
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    partialUpdateProduct
};