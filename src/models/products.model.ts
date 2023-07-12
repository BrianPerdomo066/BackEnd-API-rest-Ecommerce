

import { Schema,model } from "mongoose";


const productSchema = new Schema(

    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            require: false
        },
        descripcion: {
            type: String
        },
        quantity: {
            type: Number,
            require: true
        },
        ranking: {
            type: Number,
            defaul: 0
        },
        category: {
            type: String,
            default: 'Uncategorized'
        },
        userId: {
            type: Number,
            require: true
        },
        deliverydate:{
            type: Date,
            default: new Date
        }
    },                               
    {
        timestamps: true
    }
);

const ProductModel = model( 'product', productSchema );


export default ProductModel; 

