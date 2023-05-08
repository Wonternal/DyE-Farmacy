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

  const editProduct = async (data) => {
    try {
        const response = await fetch(`${API_URL}/producto/${data.idProducto}`, {
          method: 'PUT',
          body: JSON.stringify({
            nombre: data.nombre,
            descripcion: data.descripcion,
            cantidad: data.cantidad,
            precio: data.precio,
            categoria: data.categoria
          }),
          headers: {
            'Content-type': 'application/json'
          }
        })
        return response;
    } catch (error) {
        throw error;
    }
  };

  
const createProduct = async (data) => {
  try {
      const response = await fetch(`${API_URL}/producto`, {
          method: "POST",
          body: JSON.stringify({
            nombre: data.nombre,
            descripcion: data.descripcion,
            cantidad: data.cantidad,
            precio: data.precio,
            categoria: data.categoria
          }),
          headers: {
              "Content-type": "application/json",
          },
      });

      return response;
  } catch (error) {
      throw error
  }
};
const ProductoServices = {
    getAllProduct,
    getProductById,
    editProduct,
    createProduct
};

export default ProductoServices;