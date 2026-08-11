import { useState } from "react";

function Navbar() {
  const [ventasAbierto, setVentasAbierto] = useState(false);
  const [gastosAbierto, setGastosAbierto] = useState(false);
  const [inventarioAbierto, setInventarioAbierto] = useState(false);

  return (
    <aside className="sidebar">
      <h2>DELICIOUS</h2>

      <a href="/dashboard" className="acceso">
        🏠 Dashboard
      </a>

      {/* VENTAS */}
      <button
        className="menu-btn"
        onClick={() => setVentasAbierto(!ventasAbierto)}
      >
        📊 Ventas {ventasAbierto ? "▲" : "▼"}
      </button>

      {ventasAbierto && (
        <div className="submenu">
          <a href="/registrarventa">Registrar Venta</a>
          <a href="/ventas">Ver Ventas</a>
        </div>
      )}

      {/* GASTOS */}
      <button
        className="menu-btn"
        onClick={() => setGastosAbierto(!gastosAbierto)}
      >
        💰 Gastos {gastosAbierto ? "▲" : "▼"}
      </button>

      {gastosAbierto && (
        <div className="submenu">
          <a href="/gastos/nuevo">Registrar Gasto</a>
          <a href="/gastos">Ver Gastos</a>
        </div>
      )}

      {/* INVENTARIO */}
      <button
        className="menu-btn"
        onClick={() => setInventarioAbierto(!inventarioAbierto)}
      >
        📦 Inventario {inventarioAbierto ? "▲" : "▼"}
      </button>

      {inventarioAbierto && (
        <div className="submenu">
          <a href="/inventario/nuevo">Agregar Producto</a>
          <a href="/inventario">Ver Inventario</a>
        </div>
      )}

      <a href="/" className="acceso">
        🚪 Cerrar sesión
      </a>
    </aside>
  );
}

export default Navbar;
