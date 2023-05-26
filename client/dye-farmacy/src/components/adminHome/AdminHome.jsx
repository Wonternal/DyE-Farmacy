import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
    const medicna = require("../../assets/dark/medicina.png");
    const pedidos = require("../../assets/dark/order-delivery.png");
    const clientes = require("../../assets/dark/personas.png");
    return (
        <>
            <div className="containerAdmin">
                <div>
                    <div className="containarImgTextAdmin">
                        <Link to={"/adminProductos"} style={{ textDecoration: "none", color: "black" }}>
                            <img src={medicna} alt="logo" className="imgAdmin" />
                            <h1 style={{textAlign: "center"}}>PRODUCTOS</h1>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to={"/adminPedidos"} style={{ textDecoration: "none", color: "black" }}>
                        <div className="containarImgTextAdmin">
                            <img src={pedidos} alt="logo" className="imgAdmin" />
                            <h1 style={{textAlign: "center"}}>PEDIDOS</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to={"/adminClients"} style={{ textDecoration: "none", color: "black" }}>
                        <div className="containarImgTextAdmin">
                            <img src={clientes} alt="logo" className="imgAdmin" />
                            <h1 style={{textAlign: "center"}}>CLIENTES</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AdminHome;
