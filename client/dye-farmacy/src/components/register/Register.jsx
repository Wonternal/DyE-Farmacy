import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const iconoLogin = require("../../assets/light/user (2).png");
    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin">
                    <div>
                        <label for="nombre" className="text-secondary">
                            NOMBRE
                        </label>
                        <div>
                            <input id="nombre" name="nombre" type="text" placeholder="" required="" className="formularioLoginInput" />
                        </div>
                    </div>
                    <div>
                        <label for="apellidos" className="text-secondary">
                            APELLIDOS
                        </label>
                        <div>
                            <input id="apellidos" name="apellidos" type="text" placeholder="" required="" className="formularioLoginInput" />
                        </div>
                    </div>
                    <div>
                        <label for="email" className="text-secondary">
                            EMAIL
                        </label>
                        <div>
                            <input id="email" name="email" type="email" placeholder="" required="" className="formularioLoginInput" />
                        </div>
                    </div>

                    <div className="">
                        <label for="password" className="text-secondary">
                            CONTRASEÑA
                        </label>
                        <div>
                            <input id="password" name="password" type="password" placeholder="" required="" className="formularioLoginInput" />
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
