import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarGastoPage() {
  const navigate = useNavigate();

  const [valor, setValor] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const registrarGasto = (e) => {
    e.preventDefault();

    // Por ahora solamente visual.
    // Posteriormente aquí irá axios.post().
    alert("✅ Gasto registrado correctamente");

    setValor("");
    setDescripcion("");
  };

  return (
    <main className="formulario-page">
      <button
        type="button"
        className="btn-regresar"
        onClick={() => navigate("/dashboard")}
      >
        ← Regresar
      </button>

      <div className="formulario-container">
        <h1>Registrar Gasto</h1>

        <form onSubmit={registrarGasto}>
          <div className="campo">
            <label>Valor</label>

            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              min="1"
              required
            />
          </div>

          <div className="campo">
            <label>Descripción</label>

            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              maxLength="50"
              required
            />
          </div>

          <button type="submit">Registrar Gasto</button>
        </form>
      </div>
    </main>
  );
}

export default RegistrarGastoPage;
