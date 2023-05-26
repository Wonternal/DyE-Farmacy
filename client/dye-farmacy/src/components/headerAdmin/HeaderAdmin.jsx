import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
const HeaderAdmin = ({ setIsLogged, userData, setUserData, setIsAdmin, isDarkMode, setIsDarkMode }) => {
    const logoClaro = require("../../assets/logos/Logo_claro.png");
    const logoOscuro = require("../../assets/logos/Logo oscuro.png");
    const iconoLunaClaro = require("../../assets/dark/night-mode.png");
    const iconoLunaOscuro = require("../../assets/light/sol.png");
    const iconoUsuarioClaro = require("../../assets/dark/user.png");
    const iconoUsuarioOscuro = require("../../assets/light/user (2).png");
    const navigate = useNavigate();

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
                    {
                        isDarkMode ? <img src={logoOscuro} alt="logo" className="logoImage" /> : <img src={logoClaro} alt="logo" className="logoImage" />
                    }
                </Link>
                <div className="botonesContainer">
                    {
                        isDarkMode ? <img src={iconoLunaOscuro} alt="Icono Usuario" className="botonImage" onClick={toggleDarkMode} /> : <img src={iconoLunaClaro} alt="Icono Usuario" className="botonImage" onClick={toggleDarkMode} />
                    }
                    <div>
                        {
                            isDarkMode ? <img src={iconoUsuarioOscuro} alt="Icono Usuario" className="botonImage" /> : <img src={iconoUsuarioClaro} alt="Icono Usuario" className="botonImage" />
                        }
                        <span>
                            {userData.nombre}
                        </span>
                    </div>
                    <button onClick={logout} className="btnFilter"><span>Cerrar</span></button>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
