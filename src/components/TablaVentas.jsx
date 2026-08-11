import { useNavigate } from "react-router-dom";

function TablaVentas({ ventas }) {
  const navigate = useNavigate();

  const verDetalle = (idVenta) => {
    navigate(`/ventas/${idVenta}`);
  };

  return (
    <table class="table table-striped table-hover  table-borderedtable table-bordered">
      <thead>
        <tr class="table-info">
          <th>N.º Venta</th>
          <th>Fecha</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {ventas.map((venta) => (
          <tr key={venta.idVenta}>
            <td>{venta.idVenta}</td>

            <td>{venta.fecha}</td>

            <td>${venta.total.toLocaleString("es-CO")}</td>

            <td>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => verDetalle(venta.idVenta)}
              >
                Ver detalle
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaVentas;
