import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HeaderAdmin = ({ isLogged, userData, precioTotalCarrito }) => {
    const logoClaro = require("../../assets/logos/Logo_claro.png");

    const iconoLuna = require("../../assets/dark/night-mode.png");
    const iconoUsuario = require("../../assets/dark/user.png");

    return (
        <>
            <div className="headerContainer">
                <Link to={"/"}>
                    <img src={logoClaro} alt="logo" className="logoImage" />
                </Link>
                <div className="botonesContainer">
                    <img src={iconoLuna} alt="logo" className="botonImage" />
                    <div>
                        <img src={iconoUsuario} alt="logo" className="botonImage mr-2" />
                        <span>{userData.nombre} {userData.apellidos}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
