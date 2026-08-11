import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (usuario === "" || password === "") {
      alert("⚠️ Complete todos los campos");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>DELICIOUS</h1>

        <p>Iniciar sesión</p>

        <form onSubmit={iniciarSesion}>
          <div className="campo">
            <label for="exampleFormControlInput1" class="form-label">
              correo electronico
            </label>

            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>

          <div className="campo">
            <label for="validationServerUsername" class="form-label">
              Contraseña
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
