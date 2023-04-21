import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductoServices from "../../services/producto.service";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Home = ({ isLogged }) => {
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
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={carouselImg1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carouselImg2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carouselImg3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
            <h1 className="text-center mt-2">
                <u>Productos</u>
            </h1>
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
