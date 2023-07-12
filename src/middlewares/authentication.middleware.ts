import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { RequestExtends } from "../interfaces/RequestExtends.interface";

const authentionUser = ( req: RequestExtends, res: Response, next: NextFunction ) => {
    try {
        const bearerToken = req.headers.authorization || '';
        const arrBearerToken = bearerToken.split( ' ' );
        const token = arrBearerToken.pop();
   

        const payload = verify( `${token}`, `${process.env.JWT_SECRET_KEY}`);

        if ( ! payload ) {
            return res.json({
                msg: 'INVALID_TOKEN'
            });
        }


    const { userId, rol, name } = payload as { userId: string; rol: string; name: string };

    console.log( userId, rol, name);

    // agregamos los valores del token al objeto request de express usando una nueva interface
    req.authUser = { userId, rol, name };




    console.log( token );
    next();
        
    } catch (error) {

        res.json({
            msg: 'INVALID_AUTHENTICATION'
        });
    }

}
    




export {
    authentionUser
};