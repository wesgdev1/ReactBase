import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Vehicle } from "./Vehicle";
import styles from "./VehicleList.module.css";

/**
 * Componente VehicleList - Muestra una lista de vehículos con funcionalidades de filtrado y búsqueda
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.vehiculos - Array de vehículos a mostrar
 * @param {Function} props.onVehicleSelect - Función que se ejecuta al seleccionar un vehículo
 * @param {string} props.titulo - Título de la lista (opcional)
 */
export const VehicleList = ({
  vehiculos = [],
  onVehicleSelect,
  titulo = "Catálogo de Vehículos",
}) => {
  // Estados para filtros y búsqueda
  const [busqueda, setBusqueda] = useState("");
  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroCombustible, setFiltroCombustible] = useState("");
  const [ordenarPor, setOrdenarPor] = useState("nombre");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);

  // Obtener marcas únicas para el filtro
  const marcasUnicas = useMemo(() => {
    const marcas = [...new Set(vehiculos.map((v) => v.marca))];
    return marcas.sort();
  }, [vehiculos]);

  // Obtener tipos de combustible únicos para el filtro
  const combustiblesUnicos = useMemo(() => {
    const combustibles = [...new Set(vehiculos.map((v) => v.combustible))];
    return combustibles.sort();
  }, [vehiculos]);

  // Filtrar y ordenar vehículos
  const vehiculosFiltrados = useMemo(() => {
    let filtrados = vehiculos.filter((vehiculo) => {
      // Filtro por búsqueda (marca y modelo)
      const coincideBusqueda =
        busqueda === "" ||
        `${vehiculo.marca} ${vehiculo.modelo}`
          .toLowerCase()
          .includes(busqueda.toLowerCase());

      // Filtro por marca
      const coincideMarca =
        filtroMarca === "" || vehiculo.marca === filtroMarca;

      // Filtro por combustible
      const coincideCombustible =
        filtroCombustible === "" || vehiculo.combustible === filtroCombustible;

      // Filtro por disponibilidad
      const coincideDisponibilidad = !soloDisponibles || vehiculo.disponible;

      return (
        coincideBusqueda &&
        coincideMarca &&
        coincideCombustible &&
        coincideDisponibilidad
      );
    });

    // Ordenar resultados
    filtrados.sort((a, b) => {
      switch (ordenarPor) {
        case "nombre":
          return `${a.marca} ${a.modelo}`.localeCompare(
            `${b.marca} ${b.modelo}`
          );
        case "precio-asc":
          return a.precio - b.precio;
        case "precio-desc":
          return b.precio - a.precio;
        case "año-asc":
          return a.año - b.año;
        case "año-desc":
          return b.año - a.año;
        case "kilometraje-asc":
          return a.kilometraje - b.kilometraje;
        case "kilometraje-desc":
          return b.kilometraje - a.kilometraje;
        default:
          return 0;
      }
    });

    return filtrados;
  }, [
    vehiculos,
    busqueda,
    filtroMarca,
    filtroCombustible,
    ordenarPor,
    soloDisponibles,
  ]);

  // Handler para selección de vehículo
  const handleVehicleSelect = (vehiculo) => {
    setVehiculoSeleccionado(vehiculo);
    if (onVehicleSelect) {
      onVehicleSelect(vehiculo);
    }
  };

  // Handler para limpiar filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setFiltroMarca("");
    setFiltroCombustible("");
    setOrdenarPor("nombre");
    setSoloDisponibles(false);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <div className={styles.stats}>
          {vehiculosFiltrados.length} de {vehiculos.length} vehículos
        </div>
      </header>

      {/* Filtros y búsqueda */}
      <section className={styles.filtros}>
        <div className={styles.filtrosRow}>
          {/* Búsqueda */}
          <div className={styles.filtroGrupo}>
            <label htmlFor="busqueda" className={styles.filtroLabel}>
              Buscar:
            </label>
            <input
              id="busqueda"
              type="text"
              placeholder="Buscar por marca o modelo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className={styles.inputBusqueda}
            />
          </div>

          {/* Filtro por marca */}
          <div className={styles.filtroGrupo}>
            <label htmlFor="marca" className={styles.filtroLabel}>
              Marca:
            </label>
            <select
              id="marca"
              value={filtroMarca}
              onChange={(e) => setFiltroMarca(e.target.value)}
              className={styles.select}
            >
              <option value="">Todas las marcas</option>
              {marcasUnicas.map((marca) => (
                <option key={marca} value={marca}>
                  {marca}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por combustible */}
          <div className={styles.filtroGrupo}>
            <label htmlFor="combustible" className={styles.filtroLabel}>
              Combustible:
            </label>
            <select
              id="combustible"
              value={filtroCombustible}
              onChange={(e) => setFiltroCombustible(e.target.value)}
              className={styles.select}
            >
              <option value="">Todos los tipos</option>
              {combustiblesUnicos.map((combustible) => (
                <option key={combustible} value={combustible}>
                  {combustible}
                </option>
              ))}
            </select>
          </div>

          {/* Ordenar por */}
          <div className={styles.filtroGrupo}>
            <label htmlFor="ordenar" className={styles.filtroLabel}>
              Ordenar por:
            </label>
            <select
              id="ordenar"
              value={ordenarPor}
              onChange={(e) => setOrdenarPor(e.target.value)}
              className={styles.select}
            >
              <option value="nombre">Nombre (A-Z)</option>
              <option value="precio-asc">Precio (menor a mayor)</option>
              <option value="precio-desc">Precio (mayor a menor)</option>
              <option value="año-asc">Año (más antiguo)</option>
              <option value="año-desc">Año (más reciente)</option>
              <option value="kilometraje-asc">Menos kilometraje</option>
              <option value="kilometraje-desc">Más kilometraje</option>
            </select>
          </div>
        </div>

        <div className={styles.filtrosRowSecondary}>
          {/* Checkbox solo disponibles */}
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={soloDisponibles}
              onChange={(e) => setSoloDisponibles(e.target.checked)}
              className={styles.checkbox}
            />
            Solo vehículos disponibles
          </label>

          {/* Botón limpiar filtros */}
          <button onClick={limpiarFiltros} className={styles.limpiarBtn}>
            Limpiar filtros
          </button>
        </div>
      </section>

      {/* Vehículo seleccionado */}
      {vehiculoSeleccionado && (
        <section className={styles.seleccionado}>
          <h3>Vehículo seleccionado:</h3>
          <p>
            {vehiculoSeleccionado.marca} {vehiculoSeleccionado.modelo} (
            {vehiculoSeleccionado.año})
          </p>
        </section>
      )}

      {/* Grid de vehículos */}
      <section className={styles.vehiclesGrid}>
        {vehiculosFiltrados.length > 0 ? (
          vehiculosFiltrados.map((vehiculo) => (
            <Vehicle
              key={vehiculo.id}
              {...vehiculo}
              onSelect={handleVehicleSelect}
            />
          ))
        ) : (
          <div className={styles.noResults}>
            <h3>No se encontraron vehículos</h3>
            <p>Intenta ajustar los filtros de búsqueda</p>
            <button onClick={limpiarFiltros} className={styles.limpiarBtn}>
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

// PropTypes para validación de props
VehicleList.propTypes = {
  vehiculos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      marca: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      año: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired,
      combustible: PropTypes.string.isRequired,
      kilometraje: PropTypes.number.isRequired,
      disponible: PropTypes.bool.isRequired,
    })
  ),
  onVehicleSelect: PropTypes.func,
  titulo: PropTypes.string,
};
