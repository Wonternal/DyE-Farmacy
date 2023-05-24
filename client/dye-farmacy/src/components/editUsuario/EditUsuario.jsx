import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioServices from "../../services/usuario.service";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import Swal from "sweetalert2";

const EditUsuario = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const initialInputsData = {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    newPasswordEdited: "",
    newPassword1: "",
    newPassword2: "",
  };
  const [inputsDataUser, setinputsDataUser] = useState(initialInputsData);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setinputsDataUser(userData);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const changePassword = () => {
    if (
      inputsDataUser.password === inputsDataUser.newPasswordEdited &&
      inputsDataUser.newPassword1 === inputsDataUser.newPassword2
    ) {
      inputsDataUser.password = inputsDataUser.newPassword1;
      async function editClient() {
        try {
          await UsuarioServices.editUser(inputsDataUser);
          setUserData(await UsuarioServices.getUserById(userData?.idUsuario));
          setinputsDataUser(userData);
          Swal.fire("Datos actualizados", "", "success");
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      }
      editClient();
    } else {
      Swal.fire("Error", "Las contraseñas no coiciden", "error");
    }
  };

  const handleOnChangeUser = (e) => {
    setinputsDataUser({
      ...inputsDataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    async function editClient() {
      try {
        await UsuarioServices.editUser(inputsDataUser);
        setUserData(await UsuarioServices.getUserById(userData?.idUsuario));
        setinputsDataUser(userData);
        Swal.fire("Datos actualizados", "", "success");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    editClient();
  };

  useEffect(() => {
    setinputsDataUser(userData);
  }, [userData]);

  return (
    <>
      <div className="loginContainer">
        <form className="formularioLogin" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="text" className="text-secondary">
              NOMBRE
            </label>
            <div>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputsDataUser?.nombre}
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" className="text-secondary">
              APELLIDOS
            </label>
            <div>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                placeholder=""
                required
                className="formularioLoginInput"
                onChange={handleOnChangeUser}
                value={inputsDataUser?.apellidos}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mt-4 w-100">
              <b style={{ color: "white" }}>CONFRIMAR</b>
            </button>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-primary mt-4 w-100"
              onClick={handleShow}
            >
              <b style={{ color: "white" }}>CAMBIAR CONTRASEÑA</b>
            </button>
          </div>
          <hr />
          <div className="text-center">
            <p className="mb-0">¿Quiere cancelar la edición?</p>
            <Link to={"/"} className="registerLink">
              <b>Cancelar aquí</b>
            </Link>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="formularioLogin">
              <h2 htmlFor="text" className="text-secondary">
                Cambio de contraseña
              </h2>
            </Modal.Header>
            <Modal.Body className="formularioLogin">
              <div>
                <label htmlFor="text" className="text-secondary">
                  CONTRASEÑA ACTUAL
                </label>
                <div>
                  <input
                    id="newPasswordEdited"
                    name="newPasswordEdited"
                    type="password"
                    placeholder=""
                    required
                    className="formularioLoginInput"
                    onChange={handleOnChangeUser}
                    value={inputsDataUser?.newPasswordEdited || ""}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="text" className="text-secondary">
                  CONTRASEÑA NUEVA
                </label>
                <div>
                  <input
                    id="newPassword1"
                    name="newPassword1"
                    type="password"
                    placeholder=""
                    required
                    className="formularioLoginInput"
                    onChange={handleOnChangeUser}
                    value={inputsDataUser?.newPassword1 || ""}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="text" className="text-secondary">
                  REPITE LA NUEVA CONTRASEÑA
                </label>
                <div>
                  <input
                    id="newPassword2"
                    name="newPassword2"
                    type="password"
                    placeholder=""
                    required
                    className="formularioLoginInput"
                    onChange={handleOnChangeUser}
                    value={inputsDataUser?.newPassword2 || ""}
                  />
                </div>
              </div>
            <div className="btn-container">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="mb-3"
              >
                Cancelar
              </Button>
              <button
                type="submit"
                variant="primary"
                className="btn btn-success"
                onClick={changePassword}
              >
                Guardar cambios
              </button>
            </div>
            </Modal.Body>
          </Modal>
        </form>
      </div>
    </>
  );
};

export default EditUsuario;
