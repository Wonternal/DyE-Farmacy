import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";

const Producto = () => {
    const { id } = useParams();

    const [producto, setProducto] = useState();
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    const iconCarrito = require("../../assets/dark/shopping-cart.png");
    useEffect(() => {
        if (id) {
            async function retriveProduct() {
                try {
                    const productData = await ProductoServices.getProductById(id)
                    setProducto(productData);
                } catch (error) {
                    console.log(error);
                }
            }
            retriveProduct();
        }
    }, [id])

    return (
        <>
            <div className="productContainertId">
                <img style={{ width: 450 }} src={iconPorgress} alt="" />
                <div style={{ marginLeft: 20 }}>
                    <h1>
                        <b>{producto?.nombre}</b>
                    </h1>
                    <p style={{ color: "lightgrey" }}>
                        Referencia: {producto?.idProducto}
                    </p>
                    <p>
                        {producto?.descripcion}
                    </p>
                    <hr />
                    <p>
                        {producto?.precio} € / u
                    </p>
                    <div className="containerCarrito">
                        <input className="inputCarritoContainer" type="number" />
                        <button className="textoCarritoContainer">
                            <img style={{ width: 20, marginRight: 10 }} src={iconCarrito} alt=""/>
                            <label className="textoCarrito">AÑADIR AL CARRITO</label>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Producto;
