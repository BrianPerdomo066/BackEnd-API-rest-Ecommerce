import express, { Request, Response } from "express";
import main from './routes/index'


const app = express();

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


app.use ( '/api',)



app.listen( 3000, () => {
    console.log ( 'servidor lanzado el puerto 3000' )
});

