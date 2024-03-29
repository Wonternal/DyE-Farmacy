import { API_URL } from "./apiUrl";
import axios from "axios";

const registerUser = async (data) => {
    try {
        const response = await fetch(`${API_URL}/usuario`, {
            method: "POST",
            body: JSON.stringify({
                nombre: data.nombre,
                apellidos: data.apellidos,
                email: data.email,
                password: data.password,
                rol: 0,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
};

const loginUser = async (data) => {
    try {
        const response = await fetch(`${API_URL}/usuario/check`, {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const editUser = async (data) => {
    try {
        const response = await fetch(`${API_URL}/usuario/${data.idUsuario}`, {
            method: "PUT",
            body: JSON.stringify({
                nombre: data.nombre,
                apellidos: data.apellidos,
                email: data.email,
                password: data.password,
                rol: data.rol,
                telefono: data.telefono,
                direccion: data.direccion,
                codigoPostal: data.codigoPostal,
                ciudad: data.ciudad,
                pais: data.pais,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};
const getUserById = async (id) => {
    const response = await axios.get(`${API_URL}/usuario/${id}`);
    const user = response.data;
    return user;
};

const getAllUser = async () => {
    const response = await axios.get(`${API_URL}/usuario`);
    const usuario = response.data;
    return usuario;
};


const uploadPhoto = async (foto, idProducto) => {
    const formData = new FormData();
    formData.append("file", foto);
    formData.append("id", idProducto);
    try {
      const response = await fetch(`${API_URL}/producto/upload`, {
        method: "POST",
        body: formData,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  

const UsuarioServices = {
    registerUser,
    loginUser,
    editUser,
    getUserById,
    getAllUser,
    uploadPhoto
};

export default UsuarioServices;
