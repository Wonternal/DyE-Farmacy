import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductoServices from "../../services/producto.service";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import UsuarioServices from "../../services/usuario.service";

const Home = ({ setIsAdmin, setUserData, setIsLogged }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [productos, setProductos] = useState([]);
    const [productosSinFiltrar, setProductosSinFiltrar] = useState([]);
    const carouselImg1 = require("../../assets/carousel/carousel1.jpg");
    const carouselImg2 = require("../../assets/carousel/carousel2.jpg");
    const carouselImg3 = require("../../assets/carousel/CAROUSEL3.jpg");
    const [searchItemInput, setSearchItemInput] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function retriveProductos() {
            try {
                const productData = await ProductoServices.getAllProduct();
                setProductos(productData);
                setProductosSinFiltrar(productData);
                let idUsuario = localStorage.getItem("idUsuario");
                if (idUsuario) {
                    const response = await UsuarioServices.getUserById(idUsuario);
                    setIsLogged(true);
                    setUserData(response);
                    if (response.rol === 1) {
                        setIsAdmin(true);
                    } else {
                        setIsAdmin(false);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        retriveProductos();
    }, []);

    const linkToProduct = (id) => {
        navigate(`/producto/${id}`);
    };

    const handleOnChangeFilter = (e) => {
        setCategoriaSeleccionada(e.target.value);
        let productosFiltrados = productosSinFiltrar.filter((producto) => producto.categoria == e.target.value);
        setProductos(productosFiltrados);
    };

    const handleOnChangeSearchItem = (e) => {
        setSearchItemInput(e.target.value);
    };

    const searchProducts = () => {
        let productosFiltrados = productosSinFiltrar.filter((producto) => producto?.nombre?.toLowerCase().includes(searchItemInput.toLowerCase()));
        setProductos(productosFiltrados);
    };

    return (
        <>
            <div className="containerSearch">
                <input
                    id="searchInput"
                    name="searchInput"
                    type="text"
                    placeholder="Busca entre más de 30000 referencias..."
                    className="formularioSearch ml-2 w-75"
                    onChange={handleOnChangeSearchItem}
                    value={searchItemInput}
                />
                <select
                    id="categoria"
                    name="categoria"
                    className="formularioSearch ml-2 p-1"
                    required
                    onChange={handleOnChangeFilter}
                    value={categoriaSeleccionada}
                >
                    <option value="" disabled hidden>
                        Seleccione categoría
                    </option>
                    <option value="Medicamento">Medicamento</option>
                    <option value="Salud">Salud</option>
                    <option value="Sexo">Sexo</option>
                    <option value="Comida">Comida</option>
                </select>
                <button type="button" className="btnFilter w-25" onClick={searchProducts}>
                    <b>Buscar</b>
                </button>
                <button
                    type="button"
                    className="btnFilter"
                    onClick={() => {
                        setProductos(productosSinFiltrar);
                        setCategoriaSeleccionada("");
                        setSearchItemInput("");
                    }}
                >
                    <b>X</b>
                </button>
            </div>

            <Carousel className="carouselContainer">
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src={carouselImg1} alt="carousel1" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src={carouselImg2} alt="carousel2" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img className="d-block w-100" src={carouselImg3} alt="carousel3" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {productos.length < 1 && (
                <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                    <div className="alert alert-info col-2 text-centered d-flex justify-content-center" role="alert">
                        <b>No hay productos</b>
                    </div>
                </div>
            )}
            <div className="productCardContainer">
                {productos.map((producto) => {
                    return (
                        <div className="productCard" style={{ width: "20rem" }} key={producto.idProducto}>
                            <div className="productContent">
                                <div onClick={() => linkToProduct(producto.idProducto)} style={{ cursor: "pointer" }}>
                                    {producto?.foto ? (
                                        <img className="card-img-top" src={`http://localhost:8080/api/v1/producto/uploads/img/${producto?.foto}`} alt="" />
                                    ) : (
                                        <img className="card-img-top" src={`http://localhost:8080/api/v1/producto/uploads/img/defaultFoto.png`} alt="" />
                                    )}
                                    <div className="card-body">
                                        <h3 className="card-title">{producto.nombre}</h3>
                                        <h5 className="card-text">{producto.precio} €</h5>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" style={{ marginTop: "100px" }}>
                                        <b>COMPRAR</b>
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

export default Home;
