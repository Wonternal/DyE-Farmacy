import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarritoServices from "../../services/carrito.service";
import { useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";

const Cesta = ({ precioTotalCarrito, setPrecioTotalCarrito }) => {
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    const { id } = useParams();
    const [carritoItems, setCarritoItems] = useState([]);

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

    const handleOnClickEliminarProductoCarrito = async (idCarrito, idProducto) => {
        try {
            await CarritoServices.deleteCarritoItemFromCarrito(idCarrito, idProducto);
            Swal.fire("Producto eliminado de la cesta", "", "success");
            const newCarritoItems = carritoItems.filter((carritoItem) => carritoItem.idProducto !== idProducto);
            setCarritoItems(newCarritoItems);
        } catch (error) {
            console.log(error);
        }
    };

    const calcularPrecioTotalCarrito = () => {
        let precioTotal = 0;
        carritoItems.forEach((carritoItem) => {
            precioTotal += carritoItem.precio * carritoItem.cantidad;
        });
        setPrecioTotalCarrito(precioTotal);
    };

    return (
        <>
            <h1 className="text-center">Carrito</h1>
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

                                    <button
                                        type="button"
                                        onClick={() => handleOnClickEliminarProductoCarrito(carritoItem.idCarrito, carritoItem.idProducto)}
                                        className="btn btn-primary mt-4 w-100"
                                    >
                                        <b>Eliminar de la cesta</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <h1 className="text-center">Total (Impuestos incluidos) {precioTotalCarrito}€</h1>
            <button type="button" className="btn btn-primary mt-4 w-200">
                <b>Realizar pedido</b>
            </button>
        </>
    );
};

export default Cesta;
