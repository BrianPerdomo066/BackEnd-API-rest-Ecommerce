class product {
    name;
    price;
    descripcion;

}

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
        }
    },                               
    {
        timestamps: true
    }
);

const productModel = model( 'product', productSchema );


export default ;

