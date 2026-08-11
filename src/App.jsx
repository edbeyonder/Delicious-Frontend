import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import InventarioPage from "./pages/InventarioPage";
import FproductoPage from "./pages/FProductoPage";
import LoginPage from "./pages/LoginPage";
import RegistrarVentaPage from "./pages/RegistrarVentaPage";
import VerVentasPage from "./pages/VerVentasPage";
import GastosPage from "./pages/GastosPage";
import RegistrarGastoPage from "./pages/RegistrarGastoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/inventario" element={<InventarioPage />} />

        <Route path="/inventario/nuevo" element={<FproductoPage />} />

        <Route path="/inventario/actualizar" element={<FproductoPage />} />

        <Route path="/" element={<LoginPage />} />
        <Route path="/registrarventa" element={<RegistrarVentaPage />} />
        <Route path="/ventas" element={<VerVentasPage />} />
        <Route path="/ventas/:id" element={<div>Detalle de venta</div>} />
        <Route path="/gastos" element={<GastosPage />} />

        <Route path="/gastos/nuevo" element={<RegistrarGastoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
