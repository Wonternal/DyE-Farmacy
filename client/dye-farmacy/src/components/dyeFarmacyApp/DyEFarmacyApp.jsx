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

const DyEFarmacyApp = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState();

    return (
        <div className="">
            <Header isLogged={isLogged} />
            <Routes>
                <Route path="/" element={<Home isLogged={isLogged} />}></Route>
                <Route path="/login" element={<Login setIsLogged={setIsLogged} setUserData={setUserData} />}></Route>
                <Route path="/register" element={<Register setIsLogged={setIsLogged} setUserData={setUserData} />}></Route>
                <Route path="/perfil" element={<PerfilUsuario setIsLogged={setIsLogged} userData={userData} />}></Route>
                <Route path="/producto/:id" element={<Producto isLogged={isLogged} />}></Route>
            </Routes>
            <HelpButton />
            <Footer />
        </div>
    );
};

export default DyEFarmacyApp;
