import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PerfilUsuario = ({ setIsLogged, userData }) => {
    const iconoLogin = require("../../assets/light/user (2).png");
    const iconoLogout = require("../../assets/light/logout-white.png");
    const[verPassword, setVerPassword] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const retrievePassword = () => {
        let passwordOcutlo = "";
        for (let i = 0; i < userData.password.length; i++) {
            passwordOcutlo += "*"
        }
        return (
            passwordOcutlo
        )
    }
    const logout = () => {
        setIsLogged(false)
        Swal.fire("Sesión cerrada con éxito", "", "success");
        navigate("/");
    }

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin">
                    <div>
                        <div className="btn-noClick btn-primary w-100">
                            <img className="iconoBotonLogin mr-5" src={iconoLogin} alt="" />
                            <b>PERFIL DEL USUARIO</b>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <label className="text-secondary">
                            NOMBRE
                        </label>
                        <div>
                            {
                                userData.nombre
                            }
                        </div>
                    </div>

                    <div>
                        <label className="text-secondary">
                            APELLIDOS
                        </label>
                        <div>
                            {
                                userData.apellidos
                            }
                        </div>
                    </div>
                    <div>
                        <label className="text-secondary">
                            EMAIL
                        </label>
                        <div>
                            {
                                userData.email
                            }
                        </div>
                    </div>
                    <div>
                        <label className="text-secondary">
                            CONTRASEÑA
                        </label>
                        <div onClick={() =>  setVerPassword(!verPassword)}>
                            {
                                verPassword ? userData.password : retrievePassword()
                            }
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="btn btn-primary w-100" onClick={() => logout()}>
                            <img className="iconoBotonLogin mr-5" src={iconoLogout} alt="" />
                            <b>LOGOUT</b>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PerfilUsuario;
