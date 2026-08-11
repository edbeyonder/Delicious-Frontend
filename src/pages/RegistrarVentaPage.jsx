import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarVentaPage() {
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        className="btn-regresar"
        onClick={() => navigate("/dashboard")}
      >
        ← Regresar
      </button>
      <div className="formulario-container">
        <h1>Registrar Venta</h1>

        <form>
          <div className="campo">
            <label>Producto</label>

            <select
              className="form-select"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              required
            >
              <option value="">Selecciona un producto</option>
              <option value="1">Producto 1</option>
              <option value="2">Producto 2</option>
              <option value="3">Producto 3</option>
            </select>
          </div>

          <div className="campo">
            <label>Cantidad</label>

            <input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              min="1"
              required
            />
          </div>

          <div className="campo">
            <label>Precio unitario</label>

            <input
              type="text"
              placeholder="Se calculará automáticamente"
              readOnly
            />
          </div>

          <div className="campo">
            <label>Subtotal</label>

            <input
              type="text"
              placeholder="Se calculará automáticamente"
              readOnly
            />
          </div>

          <div className="campo">
            <label>Total de la venta</label>

            <input type="text" placeholder="$0" readOnly />
          </div>

          <button type="button" className="menu-btn">
            + Agregar producto
          </button>

          <button type="submit">Registrar Venta</button>
        </form>
      </div>
    </>
  );
}

export default RegistrarVentaPage;
