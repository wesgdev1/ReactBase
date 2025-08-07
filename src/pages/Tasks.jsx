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
      completed: false,
      // Genera un ID único basado en la fecha actual
    };

    // spred operator.
    // setTasks([...tasks, newTask]);

    // notacion con prev
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id, title) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title } : task
    );
    // Modifico mi estado actualizado
    setTasks(updatedTasks);
  };

  const updateCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Formulario para registrar la tarea  */}
      <Formulario addTask={addTask} />
      {/* Listar las tareas */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              updateTask={updateTask}
              deleteTask={deleteTask}
              updateCompleted={updateCompleted}
            />
          );
        })}
      </div>

      {/* Numero de tareas en Total */}
    </div>
  );
};
