import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";

const initialState = {
    idProducto: null,
    nombre: "",
    descripcion: "",
    cantidad: "",
    precio: "",
    categoria: "",
};

const AdminAnadirProducto = () => {
    const [productos, setProductos] = useState(initialState);

    const navigate = useNavigate();

    const handleOnChangeProduct = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        async function insertProduct() {
            try {
                const response = await ProductoServices.createProduct(productos);
                response.json().then((response) => setProductos(response));
                Swal.fire("Producto añadido con éxito", "", "success");
                navigate("/adminProductos");
            } catch (error) {
                console.log(error);
            }
        }
        insertProduct();
    };

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin" onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="text" className="text-secondary">
                            NOMBRE
                        </label>
                        <div>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChangeProduct}
                                value={productos.nombre}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="text" className="text-secondary">
                            DESCRIPCIÓN
                        </label>
                        <div>
                            <input
                                id="descripcion"
                                name="descripcion"
                                type="text"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChangeProduct}
                                value={productos.descripcion}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="text" className="text-secondary">
                            CANTIDAD
                        </label>
                        <div>
                            <input
                                id="cantidad"
                                name="cantidad"
                                type="number"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChangeProduct}
                                value={productos.cantidad}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="text" className="text-secondary">
                            PRECIO
                        </label>
                        <div>
                            <input
                                id="precio"
                                name="precio"
                                type="text"
                                placeholder=""
                                required
                                className="formularioLoginInput"
                                onChange={handleOnChangeProduct}
                                value={productos.precio}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="text" className="text-secondary">
                            CATEGORÍA
                        </label>
                        <div>
                            <select
                                id="categoria"
                                name="categoria"
                                className="formularioLoginInput"
                                required
                                onChange={handleOnChangeProduct}
                                value={productos.categoria}
                            >
                                <option value="Medicamento">Medicamento</option>
                                <option value="Droga">Droga</option>
                                <option value="Salud">Salud</option>
                                <option value="Sexo">Sexo</option>
                                <option value="Comida">Comida</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <b style={{ color: "white" }}>CONFRIMAR</b>
                        </button>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p className="mb-0">¿Quiere cancelar la edición?</p>
                        <Link to={"/adminProductos"} className="registerLink">
                            <b>Cancelar aquí</b>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminAnadirProducto;
