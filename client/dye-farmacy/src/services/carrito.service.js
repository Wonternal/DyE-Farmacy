import { API_URL } from "./apiUrl";
import axios from "axios";

const getCarritoByUserId = async (id) => {
    const response = await axios.get(`${API_URL}/carrito/${id}`);
    const carritoItems = response.data;
    return carritoItems;
};

const CarritoServices = {
    getCarritoByUserId,
};

export default CarritoServices;
