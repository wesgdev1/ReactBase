import { useState } from "react";
import styles from "./Formulario.module.css";

export const Formulario = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevenir el comportamiento por defecto del formulario
    if (!title) return; // Si no hay título, no hacer nada
    addTask(title);
    setTitle(""); // Limpiar el campo de entrada
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu Tarea"
        className={styles.inputField}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button type="submit">Agregar Tarea</button>
    </form>
  );
};
