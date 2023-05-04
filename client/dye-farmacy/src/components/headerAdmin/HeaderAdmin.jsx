import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
const HeaderAdmin = ({ setIsLogged, userData, setUserData, setIsAdmin }) => {
    const logoClaro = require("../../assets/logos/Logo_claro.png");

    const iconoLuna = require("../../assets/dark/night-mode.png");
    const iconoUsuario = require("../../assets/dark/user.png");
    const navigate = useNavigate();

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    };

    const logout = () => {
        setIsLogged(false);
        setIsAdmin(false);
        setUserData({});
        localStorage.removeItem("idUsuario");
        Swal.fire("Sesión cerrada con éxito", "", "success");
        navigate("/");
    };
    return (
        <>
            <div className="headerContainer">
                <Link to={"/"}>
                    <img src={logoClaro} alt="logo" className="logoImage" />
                </Link>
                <div className="botonesContainer">
                    <img src={iconoLuna} alt="logo" className="botonImage" onClick={toggleDarkMode} />
                    <div>
                        <img src={iconoUsuario} alt="logo" className="botonImage mr-2" />
                        <span>
                            {userData.nombre}
                        </span>
                    </div>
                    <button onClick={logout}>Cerrar</button>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
