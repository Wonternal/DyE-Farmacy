import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";

const AdminProductInfo = ({userData}) => {
    const { idProducto } = useParams();

    const [producto, setProducto] = useState();
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    useEffect(() => {
        if (idProducto) {
            async function retriveProduct() {
                try {
                    const productData = await ProductoServices.getProductById(idProducto);
                    setProducto(productData);
                } catch (error) {
                    console.log(error);
                }
            }
            retriveProduct();
        }
    }, [idProducto]);

    return (
        <>
            <div className="productContainertId">
                <img style={{ width: 450, height: 450 }} src={iconPorgress} alt="" />
                <div style={{ marginLeft: 20 }}>
                    <h1>
                        <b>{producto?.nombre}</b>
                    </h1>
                    <p style={{ color: "lightgrey" }}>Referencia: {producto?.idProducto}</p>
                    <b>Categoría: {producto?.categoria}</b>
                    <hr />
                    <p>{producto?.descripcion}</p>
                    <hr />
                    <p>{producto?.precio} € / unidad</p>
                </div>
            </div>
        </>
    );
};

export default AdminProductInfo;
