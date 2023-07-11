import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const register = async (req: Request, res: Response) => {
    const user = req.body;

    try {
        const response = await registerNewUser( user );

        res.json ( response );
        
    } catch (error) {
        console.log( 'Error en el registro de usuario' );
        res.json({
            msg: 'ERROR_REGISTER_USER'
        });
        
    }

    const response = await registerNewUser( user );
    res.json ( response );
}


const login = async (req: Request, res: Response) => {
    const user = req.body;
    
    try {
        const response = await loginUser( user );
        console.log( response );
        res.json({ token: response });
        
    } catch (error) {
        console.log( 'Error en el registro de usuario' );
        res.json({
            msg: 'ERROR_LOGIN_USER'
        });
        
    }
}

export {
    register,login
};