import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PedidoService from "../../services/pedido.service";
import ProductoServices from "../../services/producto.service";

const AdminPedidosDetalles = () => {
    const { idPedido } = useParams();

    const [pedidoItems, setPedidoItems] = useState([]);

    useEffect(() => {
        async function retrievePedidoItems() {
            try {
                const data = await PedidoService.getPedidoById(idPedido);
                data.pedidoItems.forEach(async (pedidoItem) => {
                    const productData = await ProductoServices.getProductById(pedidoItem.idProducto);
                    setPedidoItems((oldPedidoItems) => [
                        ...oldPedidoItems,
                        {
                            idPedido: pedidoItem.idPedido,
                            idProducto: pedidoItem.idProducto,
                            nombre: productData.nombre,
                            descripcion: productData.descripcion,
                            precio: productData.precio,
                            stock: productData.cantidad,
                            categoria: productData.categoria,
                            cantidad: pedidoItem.cantidad,
                        },
                    ]);
                });
            } catch (error) {
                console.log(error);
            }
        }
        retrievePedidoItems();
    }, [idPedido]);

    return (
        <>
            <div className="containerAdmin">
                <div className="tableAdminPedido">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">NOMBRE DEL PRODUCTO</th>
                                <th scope="col">CATEGORIA</th>
                                <th scope="col">PRECIO</th>
                                <th scope="col">CANTIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidoItems.map((pedidoItem, index) => (
                                <tr key={index}>
                                    <td>{pedidoItem.nombre}</td>
                                    <td>{pedidoItem.categoria}</td>
                                    <td>{pedidoItem.precio}</td>
                                    <td>{pedidoItem.cantidad} €</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminPedidosDetalles;
