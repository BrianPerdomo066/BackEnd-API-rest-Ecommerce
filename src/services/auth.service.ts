import 'dotenv/config';
import { compare, hash } from "bcryptjs";
import { Auth } from "../interfaces/auth.interface";
import { user } from "../interfaces/user.interface";
import AuthModel from "../models/auth.model";
import { sign } from "jsonwebtoken";

const registerNewUser = async (newUser: user) => {
    const userFound = await AuthModel.findOne({ email: newUser.email }); 

    if ( userFound ) {
        return 'USER_ALREADY_EXISTS';
    }

    const hashPassword =  await hash( newUser.password, 9 );
    newUser.password = hashPassword;

    const response = await AuthModel.create( newUser );
    
    return response
};

const loginUser = async ( user: Auth) => {
    const userFound = await AuthModel.findOne({ email: user.email });

    if ( ! userFound ) {
        return 'USER_NOT_FOUND';
    }

    // if( user.password != userFound.password ) {
    //     return 'WRONG_PASSWORD'
    // }

    const isValidPassword =  await compare(
         user.password, 
         userFound.password 
        );
    

    if( ! isValidPassword ) {
        return 'WRONG_PASSWORD';       // TODO: no me genera el token
    }

    const JWT_SECRET = process.env.JWT_SECRET_KET || '0tr4-cl4v3-s3cr3t4';

    const token = sign(
        {
            userId: userFound._id,
            rol: userFound.rol,
            nombre: userFound.nombre
        },

        JWT_SECRET,

        {
            expiresIn: '1h'
        }
    );

    return {
        token
    }
}


export {
    registerNewUser,
    loginUser
};