import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PerfilUsuario = ({ setIsLogged, userData, setUserData, setPrecioTotalCarrito }) => {
    const iconoLogin = require("../../assets/light/user (2).png");
    const iconoLogout = require("../../assets/light/logout-white.png");
    const iconoEye = require("../../assets/dark/eye.png");
    const [verPassword, setVerPassword] = useState(false);

    const navigate = useNavigate();

    const retrievePassword = () => {
        let passwordOcutlo = "";
        for (let i = 0; i < userData.password.length; i++) {
            passwordOcutlo += "*";
        }
        return passwordOcutlo;
    };
    const logout = () => {
        setIsLogged(false);
        setUserData({});
        localStorage.removeItem("idUsuario");
        Swal.fire("Sesión cerrada con éxito", "", "success");
        navigate("/");
    };

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
                        <label className="text-secondary">NOMBRE</label>
                        <div>{userData.nombre}</div>
                    </div>

                    <div>
                        <label className="text-secondary">APELLIDOS</label>
                        <div>{userData.apellidos}</div>
                    </div>
                    <div>
                        <label className="text-secondary">EMAIL</label>
                        <div>{userData.email}</div>
                    </div>
                    <div>
                        <label className="text-secondary">CONTRASEÑA</label>
                        <div style={{ display: "flex" }}>
                            {verPassword ? userData.password : retrievePassword()}
                            <img className="iconoBotonVerPassword mr-5" src={iconoEye} alt="" onClick={() => setVerPassword(!verPassword)} />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="btn btn-primary w-100" onClick={() => logout()}>
                            <img className="iconoBotonLogin mr-5" src={iconoLogout} alt="" />
                            <b>CERRAR SESIÓN</b>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PerfilUsuario;
