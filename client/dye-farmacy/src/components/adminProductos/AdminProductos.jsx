import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";

const AdminProductos = ({ userData }) => {

    const [productos, setProductos] = useState([]);

    const navigate = useNavigate();

    const iconPorgress = require("../../assets/backgrounds/workporgess.png");

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

    // const deleteProducts = ((productData) => {
    //     Swal.fire({
    //         title: 'Eliminar producto',
    //         showDenyButton: true,
    //         confirmButtonText: 'Confirmar',
    //         denyButtonText: `Cancelar`,
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           Swal.fire('Producto eliminar con éxito', '', 'success')
    //           ProductoServices.deleteProduct(productData)
    //           setProductos(productos.filter((product) => product.idProducto !== productData.idProducto))
    //         } else if (result.isDenied) {
    //           Swal.fire('Loo cambios no se han realizado', '', 'info')
    //         }
    //       })
    // })

    const editProducts = ((id) => {
        navigate(`/adminEditProducto/${id}`);
    })

    const addProdct = (() => {
        navigate(`/adminAñadirProducto`);
    })
    return (
        <>
        <div style={{display: "flex",justifyContent: "center"}}>
                <button className="btn btn-success" style={{width: "80%"}} onClick={() => addProdct()}>
                    <b style={{fontSize: 30, padding: 10}}> AÑADIR</b>
                </button>
        </div>
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
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-outline-primary mt-4 w-100 p-3" onClick={() => editProducts(producto.idProducto)} >
                                        <b>EDITAR</b>
                                    </button>
                                    {/* <button type="submit" className="btn btn-outline-danger mt-4 w-100 p-3" onClick={() => deleteProducts(producto)}>
                                        <b>ELIMINAR</b>
                                    </button> */}
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
