import React, { useState } from "react";
import { Formulario } from "../components/tasks/Formulario";
import { Task } from "../components/tasks/Task";

export const Tasks = () => {
  // LOGICA GENERAL

  // estructyura tarea:
  //tarea={
  //   id: 1,
  //   title: "Tarea 1",
  //   completed: false, // estado de la tar
  // }

  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    // creo estrctura de la tarea
    const newTask = {
      id: Date.now(),
      title,
      completed: false, // Genera un ID único basado en la fecha actual
    };

    // spred operator.
    // setTasks([...tasks, newTask]);

    // notacion con prev
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Formulario para registrar la tarea  */}
      <Formulario addTask={addTask} />
      {/* Listar las tareas */}
      <div>
        {tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </div>

      {/* Numero de tareas en Total */}
    </div>
  );
};
