import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { Tarea } from "./Tarea";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  //funciones de control - logica

  // tarea: { id, title, estado }

  const handleAddTarea = (nuevaTarea) => {
    setTareas((prevTareas) => [
      { id: Date.now(), title: nuevaTarea, estado: false },
      ...prevTareas,
    ]);
  };

  const handleDeleteTarea = (id) => {
    const filtradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(filtradas);
  };

  const handleEditTarea = (id, nuevaTarea) => {
    const actualizadas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, title: nuevaTarea } : tarea
    );
    setTareas(actualizadas);
  };
  return (
    <div>
      <h1>Lista de Tareas</h1>

      {/* Formulario */}
      <Formulario handleAddTarea={handleAddTarea} />

      {/* Ver tareas */}
      <h2>Tareas Agregadas</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {tareas.length > 0 ? (
          <>
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                editarTarea={handleEditTarea}
                eliminarTarea={handleDeleteTarea}
              />
            ))}
          </>
        ) : (
          <p>No hay tareas agregadas.</p>
        )}
      </div>

      {/* total tareas */}
    </div>
  );
};
