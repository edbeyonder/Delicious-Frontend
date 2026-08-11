import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GastosPage() {
  const navigate = useNavigate();

  // Datos de ejemplo solamente para la interfaz.
  // Posteriormente vendrán desde la API.
  const [gastos] = useState([
    {
      idGasto: 1,
      valor: 15000,
      fecha: "10/08/2026",
      descripcion: "Compra de insumos",
    },
    {
      idGasto: 2,
      valor: 8000,
      fecha: "10/08/2026",
      descripcion: "Transporte",
    },
    {
      idGasto: 3,
      valor: 12000,
      fecha: "09/08/2026",
      descripcion: "Compra de materiales",
    },
  ]);

  return (
    <main className="gastos-page">
      <button
        type="button"
        className="btn-regresar"
        onClick={() => navigate("/dashboard")}
      >
        ← Regresar
      </button>

      <div className="gastos-contenido">
        <h1>Gastos</h1>

        <table class="table table-striped table-hover  table-borderedtable table-bordered">
          <thead>
            <tr class="table-info">
              <th>ID</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {gastos.map((gasto) => (
              <tr key={gasto.idGasto}>
                <td>{gasto.idGasto}</td>

                <td>${gasto.valor.toLocaleString("es-CO")}</td>

                <td>{gasto.fecha}</td>

                <td>{gasto.descripcion}</td>

                <td>
                  <button className="btn btn-warning btn-sm">Actualizar</button>

                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default GastosPage;
