import { Routes, Route } from "react-router-dom";

import Login from "../login/Login";
import Register from "../register/Register";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import HelpButton from "../helpButton/HelpButton";

const DyEFarmacyApp = () => {
    /**
     * All paths lead us to the new route
     * The :_id is used so that the id can be seen in the url and can be retrieved in ActorEdit
     */
    return (
        <div className="">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
            <HelpButton />
            <Footer />
        </div>
    );
};

export default DyEFarmacyApp;
