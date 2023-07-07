import { Schema,model } from "mongoose";


const authSchema = new Schema(

    {
        nombre:{
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true,
            default: 'registered'
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },                               
    {
        timestamps: true
    }
);

const AuthModel = model( 'Users', authSchema );


export default AuthModel; 

