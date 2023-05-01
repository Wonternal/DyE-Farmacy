import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
    const medicna = require("../../assets/dark/medicina.png");
    const estadisticas = require("../../assets/dark/grafico-de-barras.png");
    const pedidos = require("../../assets/dark/order-delivery.png");
    const clientes = require("../../assets/dark/personas.png");
    return (
        <>
            <div className="containerAdmin">
                <div>
                    <Link to={"/adminProductos"} style={{textDecoration : "none", color : "black"}}>
                        <div className="containarImgTextAdmin">   
                            <img src={medicna} alt="logo" className="imgAdmin" />
                            <h1>PRODUCTOS</h1>
                        </div>
                    </Link>
                </div>
                <div>
                <Link to={"/adminPedidos"} style={{textDecoration : "none", color : "black"}}>
                        <div className="containarImgTextAdmin">   
                            <img src={pedidos} alt="logo" className="imgAdmin" />
                            <h1>PEDIDOS</h1>
                        </div>
                    </Link>
                </div>
                <div>
                <Link to={"/adminClients"} style={{textDecoration : "none", color : "black"}}>
                        <div className="containarImgTextAdmin">   
                            <img src={clientes} alt="logo" className="imgAdmin" />
                            <h1>CLIENTES</h1>
                        </div>
                    </Link>
                </div>
                <div>
                <Link to={"/adminEstadisticas"} style={{textDecoration : "none", color : "black"}}>
                        <div className="containarImgTextAdmin">   
                            <img src={estadisticas} alt="logo" className="imgAdmin" />
                            <h1>ESTADÍSTICAS</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default AdminHome;
