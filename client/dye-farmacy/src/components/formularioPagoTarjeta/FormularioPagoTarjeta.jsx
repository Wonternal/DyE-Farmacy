import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PedidoService from "../../services/pedido.service";
import Swal from "sweetalert2";

const FormularioPagoTarjeta = ({ precioTotalCarrito, userData }) => {
    const initialInputsData = {
        idUsuario: userData.idUsuario,
        precioTotal: precioTotalCarrito,
        direccion: userData.direccion,
    };

    const navigate = useNavigate();

    const [inputsDataPedido, setinputsDataPedido] = useState(initialInputsData);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        async function insertPedido() {
            try {
                const responsePedido = await PedidoService.addPedido(inputsDataPedido);
                if (responsePedido.status !== 200) {
                    Swal.fire("Error en el registro", "", "error");
                    return;
                } else {
                    Swal.fire("Compra realizada con éxito", "", "success");
                    navigate("/");
                }
                responsePedido.json().then((response) => setinputsDataPedido(response));
            } catch (error) {
                console.log(error);
            }
        }
        insertPedido();
    };

    const [mes, setMes] = useState("");
    const [anio, setAnio] = useState("");

    const manejarCambioMes = (evento) => {
        let valor = evento.target.value;
        valor = valor.replace(/\D/g, "").slice(0, 2);
        if (valor > 12) valor = "12";
        setMes(valor);
    };

    const manejarCambioAnio = (evento) => {
        let valor = evento.target.value;
        valor = valor.replace(/\D/g, "").slice(0, 2);
        const anioActual = new Date().getFullYear() % 100;
        if (valor < anioActual) valor = anioActual;
        setAnio(valor);
    };

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin" onSubmit={handleOnSubmit}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <b htmlFor="text" style={{ fontSize: 24 }} className="mb-3">
                            TOTAL DEL IMPORTE {precioTotalCarrito} €
                        </b>
                    </div>
                    <div>
                        <div>
                            <div className="card">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header p-0">
                                            <h2 className="mb-0">
                                                <span className="btn btn-light btn-block text-left p-3 rounded-0">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span style={{ color: "black" }}>TAREJTA DE CRÉDITO</span>
                                                        <div className="icons">
                                                            <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="" />
                                                            <img src="https://i.imgur.com/W1vtnOV.png" width="30" alt="" />
                                                            <img src="https://i.imgur.com/35tC99g.png" width="30" alt="" />
                                                            <img src="https://i.imgur.com/2ISgYja.png" width="30" alt="" />
                                                        </div>
                                                    </div>
                                                </span>
                                            </h2>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body-tarejta payment-card-body">
                                                <span className="font-weight-normal card-text" style={{ color: "black" }}>
                                                    NÚMERO DE LA TARJETA
                                                </span>
                                                <div className="input">
                                                    <i className="fa fa-credit-card"></i>
                                                    <input type="number" className="form-control" required placeholder="0000 0000 0000 0000" />
                                                </div>
                                                <div className="row mt-3 mb-3">
                                                    <div className="col-md-6">
                                                        <span className="font-weight-normal card-text" style={{ color: "black" }}>
                                                            FECHA DE CADUCIDAD
                                                        </span>
                                                        <div className="input">
                                                            <i className="fa fa-calendar"></i>
                                                            <input
                                                                className="form-control mb-2"
                                                                type="number"
                                                                id="mes"
                                                                placeholder="MM"
                                                                maxLength={2}
                                                                required
                                                                value={mes}
                                                                onChange={manejarCambioMes}
                                                            />
                                                            <input
                                                                className="form-control"
                                                                type="number"
                                                                id="anio"
                                                                placeholder="YY"
                                                                maxLength={2}
                                                                required
                                                                value={anio}
                                                                onChange={manejarCambioAnio}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span className="font-weight-normal card-text" style={{ color: "black" }}>
                                                            CVC/CVV
                                                        </span>
                                                        <div className="input">
                                                            <i className="fa fa-lock"></i>
                                                            <input type="number" className="form-control" required placeholder="000" max={999} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mt-4 w-100">
                            <b>CONFIRMAR PAGO</b>
                        </button>
                    </div>
                    <hr />
                    <div className="text-center">
                        <p className="mb-0">¿Quiere cancelar del pedido?</p>
                        <Link to={"/"} className="registerLink">
                            <b>Cancelar aquí</b>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormularioPagoTarjeta;
