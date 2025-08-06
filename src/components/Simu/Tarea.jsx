import React, { useState } from "react";

import styles from "./Tarea.module.css"; // Assuming you have a CSS module for styling

export const Tarea = ({
  tarea,
  editarTarea,
  eliminarTarea,
  // Assuming tarea is an object with properties like id, title, description, etc.
}) => {
  const [modoEditar, setModoEditar] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.title);

  return (
    <div className={styles.container}>
      {modoEditar ? (
        <>
          <input
            type="text"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
            className={styles.inputField}
          />
          <button
            onClick={() => {
              editarTarea(tarea.id, nuevoTexto);
              setModoEditar(false);
            }}
            className={styles.editButton}
          >
            Guardar
          </button>
        </>
      ) : (
        <>
          <h3>{tarea.title}</h3>
          <span>estado: {tarea.estado ? "completada" : "pendiente"}</span>
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          <button onClick={() => setModoEditar(!modoEditar)}>
            {modoEditar ? "Cancelar" : "Editar"}
          </button>
        </>
      )}
    </div>
  );
};
