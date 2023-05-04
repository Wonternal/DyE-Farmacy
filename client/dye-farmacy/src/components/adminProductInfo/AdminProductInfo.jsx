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
            {
                    producto?.foto ? <img className="productImg" src={`http://localhost:8080/api/v1/producto/uploads/img/${producto?.foto}`} alt="" /> : <img className="productImg" src={`http://localhost:8080/api/v1/producto/uploads/img/defaultFoto.png`} alt="" />
                }
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
