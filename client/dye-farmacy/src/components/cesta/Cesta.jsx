import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarritoServices from "../../services/carrito.service";
import { Link, useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";

const Cesta = ({ precioTotalCarrito, setPrecioTotalCarrito }) => {
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
                            foto: productData.foto
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
        console.log(carritoItems);
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
            <div className="productCardContainer">
                {carritoItems.map((carritoItem, index) => {
                    return (
                        <div className="productCard" style={{ width: "20rem" }} key={index}>
                            <div className="productContent">
                                <div style={{ cursor: "pointer" }}>
                                {
                                        carritoItem?.foto ? <img className="card-img-top" src={`http://localhost:8080/api/v1/producto/uploads/img/${carritoItem?.foto}`} alt="" /> : <img className="card-img-top" src={`http://localhost:8080/api/v1/producto/uploads/img/defaultFoto.png`} alt="" />
                                    }
                                    <div className="card-body">
                                        <h3 className="card-title">{carritoItem.nombre}</h3>
                                        <h5 className="card-text">Cantidad: {carritoItem.cantidad}</h5>
                                        <h5 className="card-text">Precio {carritoItem.precio} €</h5>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleOnClickEliminarProductoCarrito(carritoItem.idCarrito, carritoItem.idProducto)}
                                        className="btn btn-primary mt-4 mb-4 w-100"
                                    >
                                        <b>Eliminar de la cesta</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {precioTotalCarrito <= 0 ? (
                <div className="carrito-vacio">
                    <img src={iconoCestaEmoty} style={{ height: "450px" }} alt="" />
                </div>
            ) : (
                <>
                    <h1 className="text-center">Total (Impuestos incluidos) {precioTotalCarrito?.toFixed(2)}€</h1>
                    <div className="container">
                        <div className="carritoBtn">
                            <Link to={"/envio"} className="registerLink">
                                <button type="button" className="btn btn-primary mb-4 w-100">
                                    <b>Realizar pedido</b>
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cesta;
