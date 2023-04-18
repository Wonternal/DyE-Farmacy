import { API_URL } from "./apiUrl";

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
        console.log("Cascaso catch del service");
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
        console.log(error);
        console.log("Cascaso catch del service");
    }
};

const UsuarioServices = {
    registerUser,
    loginUser,
};

export default UsuarioServices;
