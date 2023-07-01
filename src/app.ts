import 'dotenv/config';
import express, { Request, Response } from "express";

import routeMain from './routes/index.route'
import  db  from "./config/mongo.config";


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

app.use( express.json());


app.use ( '/',routeMain);

db()
    .then( () => console.log (`mongoDB se conecto correctamente`))
    .catch( () => console.log ( `mongoDB sufre un problema de conexion`));


app.listen( PORT, () => {
    console.log ( `servidor en http://localhost:${ PORT }` )
});

