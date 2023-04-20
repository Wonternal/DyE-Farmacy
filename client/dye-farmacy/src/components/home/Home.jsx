import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductoServices from "../../services/producto.service";
import { useNavigate } from "react-router-dom";

const Home = ({ isLogged }) => {
    const [productos, setProductos] = useState([]);
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");

    const navigate = useNavigate();

    useEffect(() => {
        async function retriveProductos() {
            try {
                const productData = await ProductoServices.getAllProduct();
                setProductos(productData);
            } catch (error) {
                console.log(error);
            }
        }
        retriveProductos();
    }, []);
    const linkToProduct = (id) => {
        navigate(`/producto/${id}`);
    };
    return (
        <>
            <div className="productCardContainer">
                {productos.map((producto) => {
                    return (
                        <div className="productCard" style={{ width: "20rem" }} key={producto.idProducto}>
                            <div className="productContent">
                                <div onClick={() => linkToProduct(producto.idProducto)} style={{ cursor: "pointer" }}>
                                    <img className="card-img-top" src={iconPorgress} alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{producto.nombre}</h3>
                                        <h5 className="card-text">{producto.precio} €</h5>
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-4 w-100">
                                        <b>COMPRAR</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
