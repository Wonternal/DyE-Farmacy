import { API_URL } from "./apiUrl";
import axios from "axios";

const getCarritoByUserId = async (id) => {
    const response = await axios.get(`${API_URL}/carrito/${id}`);
    const carritoItems = response.data;
    return carritoItems;
};

const addCarritoItemToCarrito = async (idUsuario, idProducto, cantidad) => {
    const response = await axios.post(`${API_URL}/carrito/${idUsuario}/${idProducto}/${cantidad}`);

    return response;
};

const deleteCarritoItemFromCarrito = async (idCarrito, idProducto) => {
    const response = await axios.delete(`${API_URL}/carrito/${idCarrito}/${idProducto}`);
};

const CarritoServices = {
    getCarritoByUserId,
    addCarritoItemToCarrito,
    deleteCarritoItemFromCarrito,
};

export default CarritoServices;
