import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TablaVentas from "../components/TablaVentas";

function VerVentasPage() {
  const navigate = useNavigate();

  // Datos de ejemplo solamente para la interfaz.
  // Después serán reemplazados por datos de la API.
  const [ventas] = useState([
    {
      idVenta: 1,
      fecha: "09/08/2026",
      total: 25000,
    },
    {
      idVenta: 2,
      fecha: "09/08/2026",
      total: 18000,
    },
    {
      idVenta: 3,
      fecha: "10/08/2026",
      total: 32000,
    },
  ]);

  return (
    <main className="ventas-page">
      <button
        type="button"
        className="btn-regresar"
        onClick={() => navigate("/dashboard")}
      >
        ← Regresar
      </button>

      <div className="ventas-contenido">
        <h1>Ventas</h1>

        <TablaVentas ventas={ventas} />
      </div>
    </main>
  );
}

export default VerVentasPage;
