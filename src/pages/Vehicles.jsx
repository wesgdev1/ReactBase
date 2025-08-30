import { useState } from "react";
import {
  VehicleList,
  vehiculosEjemplo,
  obtenerEstadisticas,
} from "../components/Vehicle";

/**
 * Página de Vehículos - Componente principal para mostrar el catálogo de vehículos
 */
export const Vehicles = () => {
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
  const estadisticas = obtenerEstadisticas();

  const handleVehicleSelect = (vehiculo) => {
    setVehiculoSeleccionado(vehiculo);
    console.log("Vehículo seleccionado:", vehiculo);

    // Aquí podrías hacer algo con el vehículo seleccionado
    // Por ejemplo, navegar a una página de detalles, abrir un modal, etc.
  };

  return (
    <div>
      {/* Encabezado con estadísticas */}
      <section
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", margin: 0 }}>
          🚗 Concesionario AutoMax
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {estadisticas.total}
            </div>
            <div>Vehículos totales</div>
          </div>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {estadisticas.disponibles}
            </div>
            <div>Disponibles</div>
          </div>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {estadisticas.marcas}
            </div>
            <div>Marcas diferentes</div>
          </div>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              €{estadisticas.precioPromedio.toLocaleString()}
            </div>
            <div>Precio promedio</div>
          </div>
        </div>
      </section>

      {/* Lista de vehículos */}
      <VehicleList
        vehiculos={vehiculosEjemplo}
        onVehicleSelect={handleVehicleSelect}
        titulo="Nuestro Catálogo de Vehículos"
      />

      {/* Información adicional si hay un vehículo seleccionado */}
      {vehiculoSeleccionado && (
        <section
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "rgba(0, 0, 0, 0.9)",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            maxWidth: "300px",
            zIndex: 1000,
          }}
        >
          <h4 style={{ margin: "0 0 10px 0" }}>¡Excelente elección! 🎉</h4>
          <p style={{ margin: 0 }}>
            Has seleccionado el{" "}
            <strong>
              {vehiculoSeleccionado.marca} {vehiculoSeleccionado.modelo}
            </strong>
            .
            <br />
            ¿Te gustaría obtener más información o programar una prueba de
            manejo?
          </p>
          <button
            onClick={() => setVehiculoSeleccionado(null)}
            style={{
              marginTop: "10px",
              background: "transparent",
              border: "1px solid white",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
        </section>
      )}
    </div>
  );
};

