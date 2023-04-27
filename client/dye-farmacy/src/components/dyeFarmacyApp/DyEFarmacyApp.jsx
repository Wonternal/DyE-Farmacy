import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "../login/Login";
import Register from "../register/Register";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import HelpButton from "../helpButton/HelpButton";
import PerfilUsuario from "../perfilUsuario/PerfilUsuario";
import Producto from "../producto/Producto";
import Cesta from "../cesta/Cesta";
import FormularioPago from "../formularioPago/FormularioPago";

const DyEFarmacyApp = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState();
    const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0.0);

    return (
        <div className="">
            <Header isLogged={isLogged} userData={userData} precioTotalCarrito={precioTotalCarrito} />
            <Routes>
                <Route path="/" element={<Home isLogged={isLogged} />}></Route>
                <Route path="/login" element={<Login setIsLogged={setIsLogged} setUserData={setUserData} />}></Route>
                <Route path="/register" element={<Register setIsLogged={setIsLogged} setUserData={setUserData} />}></Route>
                <Route
                    path="/perfil"
                    element={
                        <PerfilUsuario setIsLogged={setIsLogged} userData={userData} setUserData={setUserData} setPrecioTotalCarrito={setPrecioTotalCarrito} />
                    }
                ></Route>
                <Route path="/producto/:idProducto" element={<Producto isLogged={isLogged} userData={userData} />}></Route>
                <Route path="/cesta/:id" element={<Cesta precioTotalCarrito={precioTotalCarrito} setPrecioTotalCarrito={setPrecioTotalCarrito} />}></Route>
                <Route path="/pedido" element={<FormularioPago precioTotalCarrito={precioTotalCarrito} userData={userData} setUserData={setUserData}/>}></Route>
            </Routes>
            <HelpButton />
            <Footer />
        </div>
    );
};

export default DyEFarmacyApp;
