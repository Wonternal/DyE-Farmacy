import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarritoServices from "../../services/carrito.service";
import { Link, useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";

const AdminCestaClienteUser = ({ precioTotalCarrito, setPrecioTotalCarrito }) => {
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    const { id } = useParams();
    const [carritoItems, setCarritoItems] = useState([]);
    const iconoCestaEmoty = require("../../assets/dark/carrito-vacio.png");

    useEffect(() => {
        async function retriveCarritoItems() {
            try {
                const data = await CarritoServices.getCarritoByUserId(id);
                data.carritoItems.forEach(async (carritoItem) => {
                    const productData = await ProductoServices.getProductById(carritoItem.idProducto);
                    setCarritoItems((oldCarritoItems) => [
                        ...oldCarritoItems,
                        {
                            idCarrito: carritoItem.idCarrito,
                            idProducto: carritoItem.idProducto,
                            nombre: productData.nombre,
                            descripcion: productData.descripcion,
                            precio: productData.precio,
                            stock: productData.cantidad,
                            categoria: productData.categoria,
                            cantidad: carritoItem.cantidad,
                        },
                    ]);
                });
            } catch (error) {
                console.log(error);
            }
        }
        retriveCarritoItems();
    }, [id]);

    useEffect(() => {
        calcularPrecioTotalCarrito();
    }, [carritoItems]);


    const calcularPrecioTotalCarrito = () => {
        let precioTotal = 0;
        carritoItems.forEach((carritoItem) => {
            precioTotal += carritoItem.precio * carritoItem.cantidad;
        });
        setPrecioTotalCarrito(precioTotal);
    };

    return (
        <>
            <div className="productCardContainer">
                {carritoItems.map((carritoItem, index) => {
                    return (
                        <div className="productCard" style={{ width: "20rem" }} key={index}>
                            <div className="productContent">
                                <div style={{ cursor: "pointer" }}>
                                    <img className="card-img-top" src={iconPorgress} alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{carritoItem.nombre}</h3>
                                        <h5 className="card-text">Cantidad: {carritoItem.cantidad}</h5>
                                        <h5 className="card-text">Precio {carritoItem.precio} €</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {
                precioTotalCarrito <= 0 ?
                    <div className="carrito-vacio">
                        <img src={iconoCestaEmoty} style={{ height: "700px"}} alt="" />
                    </div> :
                    <>
                        <h1 className="text-center">Total (Impuestos incluidos) {precioTotalCarrito}€</h1>
                    </>
            }
        </>
    );
};

export default AdminCestaClienteUser;
