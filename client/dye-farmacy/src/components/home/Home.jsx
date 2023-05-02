import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductoServices from "../../services/producto.service";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import UsuarioServices from "../../services/usuario.service";

const Home = ({ isLogged, userData, setIsAdmin, setUserData, setIsLogged }) => {
    const [productos, setProductos] = useState([]);
    const iconPorgress = require("../../assets/backgrounds/workporgess.png");
    const carouselImg1 = require("../../assets/carousel/carousel1.jpg");
    const carouselImg2 = require("../../assets/carousel/carousel2.jpg");
    const carouselImg3 = require("../../assets/carousel/CAROUSEL3.jpg");

    const navigate = useNavigate();

    useEffect(() => {
        async function retriveProductos() {
            try {
                const productData = await ProductoServices.getAllProduct();
                setProductos(productData);
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
    return (
        <>
            <Carousel>
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
                                    <button type="submit" className="btn btn-primary mt-4 w-100">
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
