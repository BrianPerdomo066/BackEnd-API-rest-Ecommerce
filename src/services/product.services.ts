import product from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

const inserproduct = async ( product: product ) => {
    const response = await ProductModel.create({ });

    return response;
}

const getAllProducts = async () => {
    return await ProductModel.find ({});
}

const getProductById = async ( productId: string ) => {
    return await ProductModel.findOne ({ _id: productId});
}

const removeProductById = async ( productId: string ) => {
    return await ProductModel.findOneAndRemove ({ _id: productId});
}

export {
    inserproduct,
    getAllProducts,
    getProductById,
    removeProductById
}