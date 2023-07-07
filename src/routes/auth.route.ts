import { Router, Request, Response } from "express";

const router = Router();

// http://localhost:3000/products
router.post( '/register', (req: Request, res: Response ) => {
    console.log ( 'Register usuario' );
    res.send( 'Register usuario' );
});

router.post('/login',(req: Request, res: Response) => {
    console.log ( 'login usuario' );
    res.send( 'login usuario' );
});


export default router;
