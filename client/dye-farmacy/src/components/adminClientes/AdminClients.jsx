import React, { useEffect, useState } from "react";
import UsuarioServices from "../../services/usuario.service";
import { Link } from "react-router-dom";

const AdminClients = ({ userData }) => {

    const [usuario, setUsuarios] = useState([]);


    useEffect(() => {
        async function retriveUsuarios() {
            try {
                const usuarioData = await UsuarioServices.getAllUser()
                setUsuarios(usuarioData);
            } catch (error) {
                console.log(error);
            }
        }
        retriveUsuarios();
    }, [userData]);

    return (
        <>
            <div class="containerAdminLista">
                <div class="tableAdminPedido">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOMBRE Y APELLIDOS</th>
                                    <th scope="col">CORREO</th>
                                    <th scope="col">CARRITO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usuario.map(({ idUsuario, nombre, apellidos, email }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{idUsuario}</th>
                                            <td>{nombre} {apellidos}</td>
                                            <td>{email}</td>
                                            <td><Link to={`/cesta/${idUsuario}`}>VER CARRITO</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminClients;
