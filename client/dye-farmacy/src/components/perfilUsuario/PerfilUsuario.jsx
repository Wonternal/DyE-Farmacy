import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PerfilUsuario = ({ setIsLogged, userData, setUserData }) => {
    const iconoLogin = require("../../assets/light/user (2).png");
    const iconoLogout = require("../../assets/light/logout-white.png");

    const navigate = useNavigate();

    const logout = () => {
        setIsLogged(false);
        setUserData({});
        localStorage.removeItem("idUsuario");
        Swal.fire("Sesión cerrada con éxito", "", "success");
        navigate("/");
    };

    return (
        <>
            <div className="loginContainer">
                <form className="formularioLogin">
                    <div>
                        <div className="btn-noClick btn-primary w-100">
                            <img className="iconoBotonLogin mr-5" src={iconoLogin} alt="" />
                            <b>PERFIL DEL USUARIO</b>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <label className="text-secondary">NOMBRE</label>
                        <p>{userData?.nombre}</p>
                    </div>

                    <div>
                        <label className="text-secondary">APELLIDOS</label>
                        <p>{userData?.apellidos}</p>
                    </div>
                    <div>
                        <label className="text-secondary">EMAIL</label>
                        <p>{userData?.email}</p>
                    </div>
                    <hr />
                    <div>
                        <div className="btn btn-primary w-100" onClick={() => logout()}>
                            <img className="iconoBotonLogin mr-5" src={iconoLogout} alt="" />
                            <b>CERRAR SESIÓN</b>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PerfilUsuario;
