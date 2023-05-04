import React, {useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductoServices from "../../services/producto.service";
import Swal from "sweetalert2";
import UsuarioServices from "../../services/usuario.service";

const initialState = {
    idProducto: null,
    nombre: "",
    descripcion: "",
    cantidad: "",
    precio: "",
    categoria: "",
    foto : ""
}
const AdminEdit = () => {

    const { idProducto } = useParams();

    const [productos, setProductos] = useState(initialState);

    const navigate = useNavigate();

    let selectedPhoto;

    useEffect(() => {
        async function retriveProductos() {
            try {
                const productData = await ProductoServices.getProductById(idProducto);
                setProductos(productData);
            } catch (error) {
                console.log(error);
            }
        }
        retriveProductos();
    }, [idProducto]);    


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
                await ProductoServices.editProduct(productos)
                Swal.fire("Producto actualizado con éxito", "", "success")
                navigate("/adminProductos");
            } catch (error) {
                console.log(error);
            }
        }
        insertProduct();
        uploadPhoto();
    };

    const selectPhoto = (e)  =>{ 
        selectedPhoto = e.target.files[0];
        if (selectedPhoto && selectedPhoto.type.indexOf('image') < 0) {
          Swal.fire('Error al seleccionar imagen:', 'El archivo debe ser del tipo imagen', 'error');
          selectedPhoto = null;
        }
      }
    
      const uploadPhoto = ()  => {
        if (!selectedPhoto) {
          Swal.fire('Error Upload: ', 'Debes seleccionar una foto', 'error');
        } else {
            const response = UsuarioServices.uploadPhoto(selectedPhoto, idProducto)
            setProductos(response);
            Swal.fire("Producto añadido con éxito", "", "success");
        }
      }

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin" onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor="text" className="text-secondary">
                            NOMBRE
                        </label>
                        <div>
                            <input id="nombre" name="nombre" type="text" placeholder="" required className="formularioLoginInput" onChange={handleOnChangeProduct}
                                value={productos.nombre} />
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
                            <input id="cantidad" name="cantidad" type="number" placeholder="" required className="formularioLoginInput" onChange={handleOnChangeProduct}
                                value={productos.cantidad}/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="text" className="text-secondary">
                            PRECIO
                        </label>
                        <div>
                            <input id="precio" name="precio" type="text" placeholder="" required className="formularioLoginInput" onChange={handleOnChangeProduct}
                                value={productos.precio}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="text" className="text-secondary">
                            CATEGORÍA
                        </label>
                        <div>
                            <input id="categoria" name="categoria" type="text" placeholder="" required className="formularioLoginInput" onChange={handleOnChangeProduct}
                                value={productos.categoria}/>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Default file input example</label>
                        <input className="form-control" type="file" id="formFile" onChange={(e) => selectPhoto(e)}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <b style={{color: "white"}}>CONFRIMAR</b>
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

export default AdminEdit;
