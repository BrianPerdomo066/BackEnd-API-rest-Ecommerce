import product from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

const inserproduct = async ( product: product ) => {
    const response = await ProductModel.create( product );

    return response;
}


export {
    inserproduct
}