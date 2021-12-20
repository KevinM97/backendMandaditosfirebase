import { Application } from "express";
import { pedido } from "./controllers/pedidoController"


export function router (app: Application){
    app.get('/api/pedido', pedido);
}