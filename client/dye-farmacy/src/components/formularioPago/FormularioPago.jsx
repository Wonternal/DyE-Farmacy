import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioServices from "../../services/usuario.service";

const FormularioPago = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const initialInputsData = {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    telefono: "",
    direccion: "",
    codigoPostal: "",
    ciudad: "",
    pais: "",
  };
  const [inputDataUser, setinputDataUser] = useState(initialInputsData);

  const handleOnChangeUser = (e) => {
    setinputDataUser({
      ...inputDataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    async function insetDatosDeEnvio() {
      try {
        await UsuarioServices.editUser(inputDataUser);
        setUserData(await UsuarioServices.getUserById(userData?.idUsuario));
        navigate("/confirmarPago");
      } catch (error) {
        console.log(error);
      }
    }
    insetDatosDeEnvio();
  };

  useEffect(() => {
    setinputDataUser(userData);
  }, [userData]);
  return (
    <>
      <div className="loginContainer">
        <form className="formularioLogin" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="text" className="text-secondary">
              TELÉFONO
            </label>
            <div>
              <input
                id="telefono"
                name="telefono"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputDataUser?.telefono}
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="text-secondary">
              DIRECCIÓN
            </label>
            <div>
              <input
                id="direccion"
                name="direccion"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputDataUser?.direccion}
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="text-secondary">
              CÓDIGO POSTAL
            </label>
            <div>
              <input
                id="codigoPostal"
                name="codigoPostal"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputDataUser?.codigoPostal}
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="text-secondary">
              CIUDAD
            </label>
            <div>
              <input
                id="ciudad"
                name="ciudad"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputDataUser?.ciudad}
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="text-secondary">
              PAÍS
            </label>
            <div>
              <input
                id="pais"
                name="pais"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputDataUser?.pais}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4 w-100">
              <b style={{ color: "white" }}>CONFRIMAR DATOS DE ENVIO</b>
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

export default FormularioPago;
