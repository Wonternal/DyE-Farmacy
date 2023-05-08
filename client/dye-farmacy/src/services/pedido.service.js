import { API_URL } from "./apiUrl";

import axios from "axios";

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

        const response2 = await fetch(`${API_URL}/carrito/${data.idUsuario}`, {
            method: "DELETE",
            body: {
                idUsuario: data.idUsuario,
                precioTotal: data.precioTotal,
                direccion: data.direccion,
            },
            headers: {
                "Content-type": "application/json",
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const getAllPedidos = async () => {
    const response = await axios.get(`${API_URL}/pedido`);
    const pedido = response.data;
    return pedido;
};

const getPedidoById = async (id) => {
    const response = await axios.get(`${API_URL}/pedido/${id}/productos`);
    return response.data;
};

const PedidoService = {
    addPedido,
    getAllPedidos,
    getPedidoById,
};

export default PedidoService;
