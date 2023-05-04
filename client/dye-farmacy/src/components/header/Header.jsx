import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = ({ isLogged, userData, setIsDarkMode, isDarkMode }) => {
    const logoClaro = require("../../assets/logos/Logo_claro.png");
    const logoOscuro = require("../../assets/logos/Logo oscuro.png");
    const iconoLunaClaro = require("../../assets/dark/night-mode.png");
    const iconoLunaOscuro = require("../../assets/light/sol.png");
    const iconoUsuarioClaro = require("../../assets/dark/user.png");
    const iconoUsuarioOscuro = require("../../assets/light/user (2).png");
    const iconoCestaClaro = require("../../assets/dark/shopping-cart.png");
    const iconoCestaOscuro = require("../../assets/light/shopping-cart.png");

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
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
                    {isLogged ? (
                        <Link to={"/perfil"}>
                            {
                                isDarkMode ? <img src={iconoUsuarioOscuro} alt="Icono Usuario" className="botonImage" /> : <img src={iconoUsuarioClaro} alt="Icono Usuario" className="botonImage" />
                            }
                        </Link>
                    ) : (
                        <Link to={"/login"}>
                            {
                                isDarkMode ? <img src={iconoUsuarioOscuro} alt="Icono Usuario" className="botonImage" /> : <img src={iconoUsuarioClaro} alt="Icono Usuario" className="botonImage" />
                            }
                        </Link>
                    )}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {isLogged ? (
                            <Link to={`/cesta/${userData?.idUsuario}`} style={{ textDecoration: "none", color: "black" }}>
                                {
                                    isDarkMode ? <img src={iconoCestaOscuro} alt="Icono Usuario" className="botonImage" /> : <img src={iconoCestaClaro} alt="Icono Usuario" className="botonImage" />
                                }
                            </Link>
                        ) : (
                            <Link
                                to={"/login"}
                                style={{ textDecoration: "none", color: "black" }}
                                onClick={() => Swal.fire("Error", "Debe iniciar sesión antes de acceder al carrito", "info")}
                            >
                                {
                                    isDarkMode ? <img src={iconoCestaOscuro} alt="Icono Usuario" className="botonImage" /> : <img src={iconoCestaClaro} alt="Icono Usuario" className="botonImage" />
                                }
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;