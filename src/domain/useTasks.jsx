import { useEffect, useState } from "react";
import { getTasks } from "../api/tasks";

export const useTasks = () => {
  // creacion de estados de la solicitud
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //llamdo a mi funcion de API

  const getTareas = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getTasks();

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTareas();
  }, []);

  return { data, loading, error, getTareas };
};
