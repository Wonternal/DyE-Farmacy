import React, { useEffect, useState } from "react";
import PedidoService from "../../services/pedido.service";
import UsuarioServices from "../../services/usuario.service";


const AdminPedidos = ({ userData }) => {

    const [pedidos, setPedidos] = useState([]);


    useEffect(() => {
        async function retrivePedidos() {
            try {
                const pedidoData = await PedidoService.getAllPedidos();
                const pedidosConUsuarios = await Promise.all(pedidoData.map(async (pedido) => {
                    const usuario = await UsuarioServices.getUserById(pedido.idUsuario);
                    return { ...pedido, usuario };
                }));
                setPedidos(pedidosConUsuarios);
            } catch (error) {
                console.log(error);
            }
        }
        retrivePedidos();
    }, [userData]);

    return (
        <>
            <div className="containerAdmin">
                <div className="tableAdminPedido">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NOMBRE DEL CLIENTE</th>
                                <th scope="col">FECHA DEL PEDIDO</th>
                                <th scope="col">TOTAL</th>
                                <th scope="col">LISTA DE PRODUCTOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidos.map(({ idPedido, usuario, precioTotal, fechaHoy }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{idPedido}</th>
                                        <td>{usuario?.nombre}</td>
                                        <td>{fechaHoy}</td>
                                        <td>{precioTotal} €</td>
                                        <td>IR</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminPedidos;
