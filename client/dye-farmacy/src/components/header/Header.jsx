import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = ({ isLogged, userData }) => {
    const logoClaro = require("../../assets/logos/Logo_claro.png");

    const iconoLuna = require("../../assets/dark/night-mode.png");
    const iconoUsuario = require("../../assets/dark/user.png");
    const iconoCesta = require("../../assets/dark/shopping-cart.png");

    return (
        <>
            <div className="headerContainer">
                <Link to={"/"}>
                    <img src={logoClaro} alt="logo" className="logoImage" />
                </Link>
                <div className="botonesContainer">
                    <img src={iconoLuna} alt="logo" className="botonImage" />
                    {isLogged ? (
                        <Link to={"/perfil"}>
                            <img src={iconoUsuario} alt="Icono Usuario" className="botonImage" />
                        </Link>
                    ) : (
                        <Link to={"/login"}>
                            <img src={iconoUsuario} alt="Icono Usuario" className="botonImage" />
                        </Link>
                    )}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {isLogged ? (
                            <Link to={`/cesta/${userData?.idUsuario}`}>
                                <img src={iconoCesta} alt="logo" className="botonImage" />
                                <span style={{ marginLeft: 5 }}>0,00€</span>
                            </Link>
                        ) : (
                            <Link to={"/login"} onClick={() => Swal.fire("Error", "Debe iniciar sesión antes de acceder al carrito", "info")}>
                                <img src={iconoCesta} alt="logo" className="botonImage" />
                                <span style={{ marginLeft: 5 }}>0,00€</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
