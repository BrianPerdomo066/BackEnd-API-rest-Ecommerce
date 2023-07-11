import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const authentionUser = ( req: Request, res: Response, next: NextFunction ) => {
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


    console.log( token );
    next();
}




export {
    authentionUser
};