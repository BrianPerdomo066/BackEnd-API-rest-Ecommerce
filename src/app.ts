import 'dotenv/config';
import express, { Request, Response } from "express";

import routeMain from './routes/index'


const app = express();
const PORT = process.env.PORT || 3001 ;

app.get('/',( req: Request, res: Response ) => {
    const message : string = 'Bienvenidos ala API de Ecommerce';



    console.log( message );
    res.send( `<h1>${message}</h1>` );
});

app.get( '/home', ( req: Request, res: Response ) => {
    const namePage : string = 'Home';

    console.log ( namePage );
    res.send( `<h1>${namePage}</h1>` );
});


app.use ( '/',routeMain);



app.listen( PORT, () => {
    console.log ( `servidor en http://localhost:${ PORT }` )
});

