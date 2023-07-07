import { Auth } from "./auth.interface";

export interface user extends Auth {
    nombre:string;
    rol: string;
}
