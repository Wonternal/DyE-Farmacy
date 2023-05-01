import { API_URL } from "./apiUrl";

import axios from 'axios';

const addPedido = async (data) => {
    try {
        const response = await fetch(`${API_URL}/pedido`, {
            method: "POST",
            body: JSON.stringify({
                idUsuario: data.idUsuario,
                precioTotal: data.precioTotal,
                direccion: data.direccion,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        return response;
    } catch (error) {
        console.log("Cascaso catch del service");
    }
};

const getAllPedidos = async () => {
    const response = await axios.get(`${API_URL}/pedido`);
    const pedido = response.data;
    return pedido;
  };

const PedidoService = {
    addPedido,
    getAllPedidos
};

export default PedidoService;
