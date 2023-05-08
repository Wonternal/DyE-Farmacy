import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductoServices from "../../services/producto.service";

const AdminProductos = ({ userData }) => {

    const [productos, setProductos] = useState([]);

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
    }, [userData]);

    const linkToProduct = (id) => {
        navigate(`/adminProducto/${id}`);
    };
    const editProducts = ((id) => {
        navigate(`/adminEditProducto/${id}`);
    })

    const addProdct = (() => {
        navigate(`/adminAñadirProducto`);
    })
    return (
        <>
            <div className="btnContainerAdmin">
                <button className="btn btn-success mt-3" style={{ width: "80%" }} onClick={() => addProdct()}>
                    <b style={{ fontSize: 30, padding: 10, color: "white" }}> AÑADIR</b>
                </button>
            </div>
            <div className="productCardContainer">
                {productos.map((producto) => {
                    return (
                        <div className="productCard" style={{ width: "20rem" }} key={producto.idProducto}>
                            <div className="productContent">
                                <div onClick={() => linkToProduct(producto.idProducto)} style={{ cursor: "pointer" }}>
                                    {
                                        producto?.foto ? <img className="card-img-top" src={`http://localhost:8080/api/v1/producto/uploads/img/${producto?.foto}`} alt="" /> : <img className="card-img-top" src={`http://localhost:8080/api/v1/producto/uploads/img/defaultFoto.png`} alt="" />
                                    }
                                    <div className="card-body">
                                        <h3 className="card-title">{producto.nombre}</h3>
                                        <h5 className="card-text">{producto.precio} €</h5>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-outline-primary mt-4 w-100 p-3" onClick={() => editProducts(producto.idProducto)} >
                                        <b>EDITAR</b>
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

export default AdminProductos;
