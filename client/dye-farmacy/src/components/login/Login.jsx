import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UsuarioServices from "../../services/usuario.service";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({ setIsLogged, setUserData }) => {
    const iconoLogin = require("../../assets/light/user (2).png");

    const navigate = useNavigate();

    const initialInputsData = {
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
        async function checkUsuario() {
            try {
                const response = await UsuarioServices.loginUser(inputsData);
                if (response.status !== 200) {
                    Swal.fire("Error en el login", `El e-mail o la contraseña no son correctos`, "error");
                    return;
                }
                response.json().then((response) => {
                    setUserData(response);
                    localStorage.setItem("idUsuario", response.idUsuario);
                });
                setIsLogged(true);
                Swal.fire("Inicio de sesión realizado correctamente", "", "success");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
        checkUsuario();
    };
    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin" onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="email" className="text-secondary">
                            EMAIL
                        </label>
                        <div>
                            <input id="email" name="email" type="email" placeholder="" required="" className="formularioLoginInput" onChange={handleOnChange} />
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
                                required=""
                                className="formularioLoginInput"
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <img className="iconoBotonLogin mr-5" src={iconoLogin} alt="" />
                            <b>INICIAR SESIÓN</b>
                        </button>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p className="mb-0">¿Todavia no tienes cuenta?</p>
                        <Link to={"/register"} className="registerLink">
                            <b>Resgistrate aquí</b>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
