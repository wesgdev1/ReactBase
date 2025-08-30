import { useSearchParams } from "react-router-dom";
import styles from "./Task.module.css";
import { useState } from "react";
export const Task = ({ task, updateTask, deleteTask, updateCompleted }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const [mode, setMode] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleModeEdition = () => {
    setMode(!mode);
  };

  const handleClickSave = () => {
    if (!title) return; // Si no hay título, no hacer nada
    updateTask(task.id, title);
    setMode(false);
  };

  return (
    <div className={styles.card}>
      {mode ? (
        <>
          <h4>Modo edicion</h4>

          <input
            type="text"
            placeholder="Modifica tu tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button onClick={handleClickSave}>Guardar</button>
          <button onClick={handleModeEdition}>Cancelar</button>
        </>
      ) : (
        <>
          {task.completed ? "✅" : "❌"}
          <h3>{task.title}</h3>
          <p>Estado: {task.completed ? "Completada" : "Pendiente"}</p>
          {!task.completed && (
            <button onClick={() => updateCompleted(task)}>Terminada</button>
          )}
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleModeEdition}>Modo Editar</button>
        </>
      )}
    </div>
  );
};
