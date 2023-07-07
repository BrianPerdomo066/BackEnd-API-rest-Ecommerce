import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
    console.log ( 'Register usuario' );
    res.send( 'Register usuario' );
}

const login = (req: Request, res: Response) => {
    console.log ( 'login usuario' );
    res.send( 'login usuario' );
}

export {
    register,login
};