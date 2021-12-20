export interface Pedido {
    idPedido?:          string;
    idCliente:         number;
    precioPedido:      number;
    descripcionPedido: string;
}

export function Pedido(data :any, id?:string){
    const { idCliente, precioPedido, descripcionPedido } = data;

    let object :Pedido = { 
    idPedido: id,
    idCliente: idCliente,
    precioPedido: precioPedido,
    descripcionPedido: descripcionPedido
    };
    return object;
}