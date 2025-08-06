import { useState } from "react";

import styles from "./Formulario.module.css";

export const Formulario = ({ handleAddTarea }) => {
  const [texto, setTexto] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      alert("Por favor, ingrese una tarea.");
      return;
    }
    handleAddTarea(texto); // Llamar a la función para agregar la tarea
    setTexto(""); // Limpiar el campo de entrada después de agregar la tarea
  };

  return (
    <form onSubmit={handleAdd} className={styles.formulario}>
      <h2>Agregar Tarea</h2>
      <label htmlFor="tarea">Nueva Tarea:</label>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Ingrese tarea"
        name="tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
};
