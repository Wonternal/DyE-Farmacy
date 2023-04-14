import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UsuarioServices from "../../services/usuario.service";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const iconoLogin = require("../../assets/light/user (2).png");

    const navigate = useNavigate();

    const initialInputsData = {
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
    };

    const [inputsData, setinputsData] = useState(initialInputsData);

    const handleOnChange = (e) => {
        setinputsData({
            ...inputsData,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // if (inputsData.nombre.trim() === "" || inputsData.apelldios.trim() === "" || inputsData.email.trim() === "" || inputsData.password.trim() === "") {
        //     alert("Introduce todos los campos");
        // }
        async function insertUsuario() {
            try {
                const response = await UsuarioServices.registerUser(inputsData);
                if (response.status !== 200) {
                    Swal.fire("Error en el registro", `El email ${inputsData.email} ya ha sido registrado previamente`, "error");
                    return;
                }
                Swal.fire("Registro realizado correctamente", "Le llegará un email de confirmación", "success");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
        insertUsuario();
    };

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin" onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="nombre" className="text-secondary">
                            NOMBRE
                        </label>
                        <div>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.nombre}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="apellidos" className="text-secondary">
                            APELLIDOS
                        </label>
                        <div>
                            <input
                                id="apellidos"
                                name="apellidos"
                                type="text"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.apellidos}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-secondary">
                            EMAIL
                        </label>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.email}
                            />
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="password" className="text-secondary">
                            CONTRASEÑA
                        </label>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                                value={inputsData.password}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <img className="iconoBotonLogin mr-5" src={iconoLogin} alt="" />
                            <b>REGISTRATE</b>
                        </button>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p className="mb-0">¿Ya tienes cuenta?</p>
                        <Link to={"/login"} className="registerLink">
                            <b>Accede aquí</b>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
