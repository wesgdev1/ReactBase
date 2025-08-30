import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Vehicle.module.css";

/**
 * Componente Vehicle - Muestra información de un vehículo individual
 * @param {Object} props - Propiedades del componente
 * @param {string} props.id - ID único del vehículo
 * @param {string} props.marca - Marca del vehículo
 * @param {string} props.modelo - Modelo del vehículo
 * @param {number} props.año - Año de fabricación
 * @param {string} props.color - Color del vehículo
 * @param {number} props.precio - Precio del vehículo
 * @param {string} props.imagen - URL de la imagen del vehículo
 * @param {string} props.combustible - Tipo de combustible
 * @param {number} props.kilometraje - Kilometraje del vehículo
 * @param {boolean} props.disponible - Si el vehículo está disponible
 * @param {Function} props.onSelect - Función que se ejecuta al seleccionar el vehículo
 */
export const Vehicle = ({
  id,
  marca,
  modelo,
  año,
  color,
  precio,
  imagen,
  combustible,
  kilometraje,
  disponible = true,
  onSelect,
}) => {
  // Estado para favoritos
  const [esFavorito, setEsFavorito] = useState(false);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  // Handlers para eventos
  const handleToggleFavorito = (e) => {
    e.stopPropagation(); // Evita que se ejecute el click del contenedor
    setEsFavorito(!esFavorito);
  };

  const handleToggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const handleSelectVehicle = () => {
    if (onSelect && disponible) {
      onSelect({
        id,
        marca,
        modelo,
        año,
        color,
        precio,
        imagen,
        combustible,
        kilometraje,
      });
    }
  };

  // Formatear precio
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(precio);
  };

  // Formatear kilometraje
  const formatearKilometraje = (km) => {
    return new Intl.NumberFormat("es-ES").format(km) + " km";
  };

  return (
    <article
      className={`${styles.vehicleCard} ${
        !disponible ? styles.noDisponible : ""
      }`}
      onClick={handleSelectVehicle}
    >
      {/* Header con favorito */}
      <header className={styles.cardHeader}>
        <button
          className={`${styles.favoriteBtn} ${
            esFavorito ? styles.favoriteActive : ""
          }`}
          onClick={handleToggleFavorito}
          aria-label={esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          {esFavorito ? "❤️" : "🤍"}
        </button>
        {!disponible && (
          <span className={styles.noDisponibleBadge}>No disponible</span>
        )}
      </header>

      {/* Imagen del vehículo */}
      <div className={styles.imageContainer}>
        <img
          src={imagen}
          alt={`${marca} ${modelo}`}
          className={styles.vehicleImage}
          loading="lazy"
        />
      </div>

      {/* Información principal */}
      <div className={styles.vehicleInfo}>
        <h3 className={styles.vehicleTitle}>
          {marca} {modelo}
        </h3>

        <div className={styles.vehicleBasics}>
          <span className={styles.year}>{año}</span>
          <span
            className={styles.color}
            style={{ backgroundColor: color?.toLowerCase() || "#gray" }}
          >
            {color}
          </span>
        </div>

        <div className={styles.price}>{formatearPrecio(precio)}</div>

        {/* Detalles adicionales (colapsable) */}
        {mostrarDetalles && (
          <div className={styles.detallesExtendidos}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Combustible:</span>
              <span className={styles.detailValue}>{combustible}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Kilometraje:</span>
              <span className={styles.detailValue}>
                {formatearKilometraje(kilometraje)}
              </span>
            </div>
          </div>
        )}

        {/* Botones de acción */}
        <div className={styles.actions}>
          <button
            className={styles.detailsBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleDetalles();
            }}
          >
            {mostrarDetalles ? "Menos detalles" : "Más detalles"}
          </button>

          {disponible && (
            <button
              className={styles.selectBtn}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectVehicle();
              }}
            >
              Seleccionar
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

// PropTypes para validación de props
Vehicle.propTypes = {
  id: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  año: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
  combustible: PropTypes.string.isRequired,
  kilometraje: PropTypes.number.isRequired,
  disponible: PropTypes.bool,
  onSelect: PropTypes.func,
};
