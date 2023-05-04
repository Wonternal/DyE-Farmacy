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
import FormularioPagoTarjeta from "../formularioPagoTarjeta/FormularioPagoTarjeta";
import AdminHome from "../adminHome/AdminHome";
import HeaderAdmin from "../headerAdmin/HeaderAdmin";
import AdminClients from "../adminClientes/AdminClients";

import AdminPedidos from "../adminPedidos/AdminPedidos";
import AdminProductos from "../adminProductos/AdminProductos";
import AdminProductInfo from "../adminProductInfo/AdminProductInfo";
import AdminEdit from "../adminEdit/AdminEdit";
import AdminAnadirProducto from "../adminAnadirProducto/AdminAnadirProducto";
import AdminCestaClienteUser from "../adminCestaClienteUser/AdminCestaClienteUser";
import AdminPedidosDetalles from "../adminPedidosDetalles/AdminPedidosDetalles";

const DyEFarmacyApp = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState();
    const [productData, setProductData] = useState();
    const [precioTotalCarrito, setPrecioTotalCarrito] = useState(0.0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div>
            {isAdmin ? (
                <HeaderAdmin isLogged={isLogged} userData={userData} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}
                />
            ) : (
                <Header isLogged={isLogged} userData={userData} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
            )}
            <Routes>
                {isAdmin ? (
                    <>
                        <Route
                            path="/"
                            element={
                                <AdminHome/>
                            }
                        ></Route>
                        <Route path="/adminClientes" element={<AdminClients userData={userData} />}></Route>

                        <Route path="/adminPedidos" element={<AdminPedidos userData={userData}/>}></Route>
                        <Route
                            path="/adminPedidos/:idPedido"
                            element={<AdminPedidosDetalles />}
                        ></Route>
                        <Route path="/adminProductos" element={<AdminProductos userData={userData}/>}></Route>
                        <Route path="/adminProducto/:idProducto" element={<AdminProductInfo/>}></Route>
                        <Route path="/adminEditProducto/:idProducto" element={<AdminEdit/>}></Route>
                        <Route path="/adminAñadirProducto/" element={<AdminAnadirProducto/>}></Route>
                        <Route path="/adminClients/" element={<AdminClients userData={userData} />}></Route>
                        <Route
                            path="/cesta/:id"
                            element={<AdminCestaClienteUser precioTotalCarrito={precioTotalCarrito} setPrecioTotalCarrito={setPrecioTotalCarrito} />}
                        ></Route>
                    </>
                ) : (
                    <>
                        <Route
                            path="/"
                            element={
                                <Home
                                    setIsLogged={setIsLogged}
                                    setUserData={setUserData}
                                    setIsAdmin={setIsAdmin}
                                />
                            }
                        ></Route>
                        <Route path="/login" element={<Login setIsLogged={setIsLogged} setUserData={setUserData} />}></Route>
                        <Route path="/register" element={<Register setIsLogged={setIsLogged} setUserData={setUserData} />}></Route>
                        <Route
                            path="/perfil"
                            element={
                                <PerfilUsuario
                                    setIsLogged={setIsLogged}
                                    userData={userData}
                                    setUserData={setUserData}
                                />
                            }
                        ></Route>
                        <Route path="/producto/:idProducto" element={<Producto isLogged={isLogged} userData={userData} />}></Route>
                        <Route
                            path="/cesta/:id"
                            element={<Cesta precioTotalCarrito={precioTotalCarrito} setPrecioTotalCarrito={setPrecioTotalCarrito} />}
                        ></Route>
                        <Route
                            path="/envio"
                            element={<FormularioPago precioTotalCarrito={precioTotalCarrito} userData={userData} setUserData={setUserData} />}
                        ></Route>
                        <Route path="/cofirmarPago" element={<FormularioPagoTarjeta precioTotalCarrito={precioTotalCarrito} userData={userData} />}></Route>
                    </>
                )}
            </Routes>
            <HelpButton isDarkMode={isDarkMode} />
            <Footer />
        </div>
    );
};

export default DyEFarmacyApp;
