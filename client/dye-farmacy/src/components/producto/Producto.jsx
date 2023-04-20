import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";

const Producto = ({ isLogged }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const [producto, setProducto] = useState();
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    const iconCarrito = require("../../assets/dark/shopping-cart.png");
    useEffect(() => {
        if (id) {
            async function retriveProduct() {
                try {
                    const productData = await ProductoServices.getProductById(id);
                    setProducto(productData);
                } catch (error) {
                    console.log(error);
                }
            }
            retriveProduct();
        }
    }, [id]);

    const handleOnClickAnadirCarrito = () => {
        if (isLogged) {
            console.log("Añadiendo producto al carrito");
        } else {
            Swal.fire("Error", "Debe iniciar sesión antes de añadir productos al carrito", "info");
            navigate("/login");
        }
    };

    const handleOnChangeQuantity = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <>
            <div className="productContainertId">
                <img style={{ width: 450 }} src={iconPorgress} alt="" />
                <div style={{ marginLeft: 20 }}>
                    <h1>
                        <b>{producto?.nombre}</b>
                    </h1>
                    <p style={{ color: "lightgrey" }}>Referencia: {producto?.idProducto}</p>
                    <p>{producto?.descripcion}</p>
                    <hr />
                    <p>{producto?.precio} € / unidad</p>
                    <div className="containerCarrito">
                        <input
                            className="inputCarritoContainer"
                            type="number"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => e.target.value > 0 && e.target.value < 100 && handleOnChangeQuantity(e)}
                        ></input>
                        <button className="textoCarritoContainer" onClick={handleOnClickAnadirCarrito}>
                            <img style={{ width: 20, marginRight: 10 }} src={iconCarrito} alt="" />
                            <span className="textoCarrito">AÑADIR AL CARRITO</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Producto;
