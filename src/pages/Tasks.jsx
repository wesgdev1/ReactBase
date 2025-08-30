import React, { useState } from "react";
import { Formulario } from "../components/tasks/Formulario";
import { Task } from "../components/tasks/Task";
import { useTasks } from "../domain/useTasks";
import { createTask, deleteTaskapi, updateTask2 } from "../api/tasks";
import Swal from "sweetalert2";

export const Tasks = () => {
  const { data, loading, error, getTareas } = useTasks();

  const addTask = async (title) => {
    const newTask = {
      title,
      description: title,
      userId: 1,
    };
    try {
      const result = await createTask(newTask);
      getTareas();

      // alerta con  sweet alert
      Swal.fire({
        title: "Tarea creada",
        text: "La tarea se ha creado correctamente",
        icon: "success",
      });
    } catch (error) {
      //sweet error alert
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error al crear la tarea",
        icon: "error",
      });
    }
  };

  const updateTask = async (id, title) => {
    try {
      await updateTask2(id, { title });
      getTareas();

      Swal.fire({
        title: "Tarea actualizada ",
        text: "La tarea se ha creado correctamente",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error alactualizar la tarea",
        icon: "error",
      });
    }
  };

  const updateCompleted = async (task) => {
    try {
      await updateTask2(task.id, { completed: !task.completed });
      getTareas();

      Swal.fire({
        title: "Tarea actualizada ",
        text: "La tarea se ha creado correctamente",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error alactualizar la tarea",
        icon: "error",
      });
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskapi(id);
      getTareas();

      Swal.fire({
        title: "Tarea eliminada",
        text: "La tarea se ha eliminado correctamente",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error al eliminar la tarea",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Formulario para registrar la tarea  */}
      <Formulario addTask={addTask} />
      {/* Listar las tareas */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {loading && <p>Cargando tareas...</p>}
        {data?.map((task) => {
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
