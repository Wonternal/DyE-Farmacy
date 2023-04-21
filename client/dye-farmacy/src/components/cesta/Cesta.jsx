import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CarritoServices from "../../services/carrito.service";
import { useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";

const Cesta = () => {
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    const { id } = useParams();
    const [carritoItems, setCarritoItems] = useState([]);
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        async function retriveCarritoItems() {
            try {
                let _carritoItems = [];
                const data = await CarritoServices.getCarritoByUserId(id);
                setCarritoItems(data?.carritoItems);
                data?.carritoItems.forEach(async (carritoItem) => {
                    const productData = await ProductoServices.getProductById(carritoItem.idProducto);
                    _carritoItems.push(productData);
                });
                setProductsInfo(_carritoItems);
            } catch (error) {
                console.log(error);
            }
        }
        retriveCarritoItems();
    }, [id]);

    return (
        <>
            <h1 className="text-center">Carrito</h1>
            <div className="productCardContainer">
                {carritoItems.map((carritoItem, index) => {
                    console.log("si");
                    return (
                        <>
                            <div className="productCard" style={{ width: "20rem" }} key={index}>
                                <div className="productContent">
                                    <div style={{ cursor: "pointer" }}>
                                        <img className="card-img-top" src={iconPorgress} alt="" />
                                        <div className="card-body">
                                            {/* <h3 className="card-title">{productInfo?.nombre}</h3>
                                            <h5 className="card-text">{productInfo?.precio}</h5> */}
                                            <h3 className="card-title">Si</h3>
                                            <h5 className="card-text">Si</h5>
                                        </div>

                                        <button type="submit" className="btn btn-primary mt-4 w-100">
                                            <b>Quitar del carrito</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Cesta;
