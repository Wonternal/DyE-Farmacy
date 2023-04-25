import axios from 'axios';

import { API_URL } from "./apiUrl";

const getAllProduct = async () => {
    const response = await axios.get(`${API_URL}/producto`);
    const productos = response.data;
    return productos;
  };
  const getProductById = async (id) => {
    const response = await fetch(`${API_URL}/producto/${id}`);
    const producto = await response.json();
    return producto;
  };

const ProductoServices = {
    getAllProduct,
    getProductById,

};

export default ProductoServices;